import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observable-subject',
  standalone: true,
  imports: [],
  templateUrl: './observable-subject.component.html',
  styleUrl: './observable-subject.component.css'
})
export class ObservableSubjectComponent implements OnInit {
  first_subscriber_observable!: any;
  second_subscriber_observable!: any;
  third_subscriber_observable!: any;

  first_subscriber_subject!: any;
  second_subscriber_subject!: any;
  third_subscriber_subject!: any;

  constructor() { }

  ngOnInit() {
    let obs = new Observable<number>(ele => {
      ele.next(Math.random());
    });

    obs.subscribe(res => {
      this.first_subscriber_observable = res;
    });

    obs.subscribe(res => {
      this.second_subscriber_observable = res;
    });

    obs.subscribe(res => {
      this.third_subscriber_observable = res;
    });

    let subject = new Subject<number>();

    subject.subscribe(res => {
      this.first_subscriber_subject = res;
    });

    subject.subscribe(res => {
      this.second_subscriber_subject = res;
    });

    subject.subscribe(res => {
      this.third_subscriber_subject = res;
    });

    subject.next(Math.random());

    const data = ajax('https://jsonplaceholder.typicode.com/users');

    // data.subscribe(res => {
    //   console.log(res);
    // });

    // data.subscribe(res => {
    //   console.log(res);
    // });

    // data.subscribe(res => {
    //   console.log(res);
    // });

    const subject1 = new Subject();

    subject1.subscribe(res => {
      console.log(res);
    })

    subject1.subscribe(res => {
      console.log(res);
    })

    subject1.subscribe(res => {
      console.log(res);
    })

    data.subscribe(subject1);

  }
}
