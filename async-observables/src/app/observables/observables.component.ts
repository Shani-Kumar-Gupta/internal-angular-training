import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  Observable,
  Observer,
  Subscription,
  concatMap,
  exhaustMap,
  filter,
  forkJoin,
  from,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [NgFor],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
})
export class ObservablesComponent implements OnInit, OnDestroy {
  httpClient = inject(HttpClient);
  data: any[] = [];
  myTestObservable!: Subscription;

  /* Session 2 */
  myOfObservable!: Observable<number | string | number[]>;
  myOfSubscription!: Subscription;
  ofDataObservable: any[] = [];

  myfromObservable!: Observable<number | string | number[]>;
  myfromSubscription!: Subscription;
  fromDataObservable: any[] = [];
  /* Operators */
  urlArray: string[] = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/comments',
  ];
  myURLObservable: Observable<string> = from(this.urlArray);

  constructor() {}
  ngOnInit() {}

  myObservable = new Observable((observer) => {
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    // setTimeout(() => {
    //   observer.error(new Error('Some error'));
    // }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
    setTimeout(() => {
      observer.next(5);
    }, 5000);
    setTimeout(() => {
      observer.complete();
    }, 3000);
  });

  myCustomObservable = Observable.create((observer: any) => {
    let counter = 0;
    setInterval(() => {
      counter = counter + 1;
      observer.next(counter);
    }, 1000);
  });

  getAsyncData() {
    // this.myTestObservable = this.myObservable.subscribe({
    //   next: (val) => {
    //     console.log(val);
    //     this.data.push(val);
    //   },
    //   error: (err) => {
    //     alert(err.message);
    //   },
    //   complete: () => {}
    // });

    this.myTestObservable = this.myCustomObservable.subscribe({
      next: (val: number) => {
        console.log('counter val: ', val);
      },
    });
  }

  /* Sesion 2*/

  createObservable() {
    // of and from
    this.myOfObservable = of(2, 3, 4, 'shani', [1, 2, 3]);
    this.myfromObservable = from([10, 20, 23, 40, 43]);
  }

  subscribeObservable() {
    this.myOfSubscription = this.myOfObservable.subscribe({
      next: (val: any) => {
        this.ofDataObservable.push(val);
      },
      error: (err: any) => {
        alert(err.message);
      },
      complete: () => {
        alert('complete');
      },
    });

    this.myfromSubscription = this.myfromObservable
      .pipe(filter((data: any) => data % 2 === 0), map((val) => val * 2))
      .subscribe({
        next: (val: any) => {
          this.fromDataObservable.push(val);
        },
        error: (err: any) => {
          alert(err.message);
        },
        complete: () => {
          alert('complete');
        },
      });
  }

  destroyObservable() {
    this.myOfSubscription.unsubscribe();
    this.myfromSubscription.unsubscribe();
  }

  ngOnDestroy() {
    // this.myTestObservable.unsubscribe();
    // this.destroyObservable();
  }

  getURLData(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  /* MergeMap, ConcatMap, ExhaustMap, SwitchMap and ForkJoin */

  mergeMapFunc() {
    console.log("mergeMap");
    this.myURLObservable.pipe(mergeMap((url) => this.getURLData(url))).subscribe((data) => {
      console.log("mergeMap Data: ", data);
    })
  }

  concatMapFunc() {
    console.log("concatMap");
    this.myURLObservable.pipe(concatMap((url) => this.getURLData(url))).subscribe((data) => {
      console.log("mergeMap Data: ", data);
    })
  }

  exhaustMapFunc() {
    console.log("exhaustMap");
    this.myURLObservable.pipe(exhaustMap((url) => this.getURLData(url))).subscribe((data) => {
      console.log("mergeMap Data: ", data);
    })
  }

  switchMapFunc() {
    console.log("exhaustMap");
    this.myURLObservable.pipe(switchMap((url) => this.getURLData(url))).subscribe((data) => {
      console.log("mergeMap Data: ", data);
    })
  }

  forkJoinFunc() {
    console.log("forkJoin");
    forkJoin(this.urlArray.map((url) => this.getURLData(url))).subscribe((data) => {
      console.log(data);
    });
  }
}
