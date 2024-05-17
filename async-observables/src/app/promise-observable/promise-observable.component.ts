import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  standalone: true,
  imports: [],
  templateUrl: './promise-observable.component.html',
  styleUrl: './promise-observable.component.css',
})
export class PromiseObservableComponent implements OnInit {
  myPromise!: Promise<string>;
  myObservable!: Observable<number>;
  constructor() { }
  
  ngOnInit() {
    
  }

  creation() {
    // promise
    this.myPromise = new Promise((resolve, reject) => {
      console.log("Promise calling.....");
      setTimeout(() => {
        resolve('Promise Resolved');
        resolve('Promise Resolved 1');
        resolve('Promise Resolved 2');
        resolve('Promise Resolved 3');
      }, 1000);
    });

    // observable
    this.myObservable = new Observable((observer) => {
      console.log("Observable Calling...");
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });
  }

  execution() {
    this.myPromise.then((data) => {
      console.log("promise data: " + data);
    }).catch((err) => {
      console.log(err);
    });

    this.myObservable.subscribe({
      next: (val) => {
        console.log("Observable val: ",val);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }

  cancellation() {

  }
}
