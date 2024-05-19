import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-reply-subject',
  standalone: true,
  imports: [],
  templateUrl: './reply-subject.component.html',
  styleUrl: './reply-subject.component.css'
})
export class ReplySubjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {  
    /* Replay Subject */
    // const subject = new Subject();
    // const subject = new ReplaySubject<number>();
    const subject = new ReplaySubject<number>(2);

    subject.next(100);
    subject.next(200);
    subject.next(300);


    // subscriber 1
    subject.subscribe((data) => {
      console.log("Data 1: ", data);
    });

    subject.next(500);
    subject.next(600);

    // subscriber 2
    subject.subscribe((data) => {
      console.log("Data 2: ", data);
    });

    subject.next(700);

    // subscriber 2
    subject.subscribe((data) => {
      console.log("Data 3: ", data);
    });
  }
}
