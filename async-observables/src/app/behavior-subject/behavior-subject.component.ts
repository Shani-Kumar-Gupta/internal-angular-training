import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css'
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    /* Behavior Subject */

    // TODO: Create a new Subject
    // const subject = new Subject(100);
    const subject = new BehaviorSubject(200);

    // subject.next(2000);

    // Subscriber 1
    subject.subscribe((data) => {
      console.log("Data 1 ",data);
    });

    // subject.next(2001);

    // Subscriber 2
    subject.subscribe((data) => {
      console.log("Data 2 ",data);
    });

    // Subject emitting value
    // subject.next(Math.random());
    subject.next(55);
    subject.next(34);

    // Subscriber 3
    subject.subscribe((data) => {
      console.log("Data 3 ",data);
    });
  }
}
