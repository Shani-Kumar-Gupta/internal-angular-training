import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {
  mySubject!: Subject<any>;
  constructor() { }

  ngOnInit() {
    this.mySubject = new Subject();

    this.mySubject.subscribe((data) => {
      console.log('Data 1 ', data);
    });

    this.mySubject.subscribe((data) => {
      console.log('Data 2 ', data);
    });

    this.mySubject.next(Math.random());
  }
}
