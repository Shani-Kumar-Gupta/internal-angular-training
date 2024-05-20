import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.css'
})
export class AsyncSubjectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    /* Async Subject */
    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.complete();
    asyncSubject.next(400);

    // subsriber 1
    asyncSubject.subscribe((data) => {
      console.log("Data 1: ", data);
    });

    asyncSubject.complete();
    asyncSubject.next(400);

    // subsriber 2
    asyncSubject.subscribe((data) => {
      console.log("Data 2: ", data);
    });
  }
}
