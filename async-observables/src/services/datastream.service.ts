import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastreamService {
  // private _dataStream: Observable<number>;
  CreateTaskEvent: EventEmitter<string> = new EventEmitter<string>();

  // Subject
  CreateTaskSubject: Subject<string> = new Subject<string>();

  constructor() {
    // this._dataStream = interval(1000); // Emits a value every second
  }

  // getRealTimeData(): Observable<number> {
  //   // return this._dataStream;
  // }
  onCreateTask(val: string) {
    this.CreateTaskEvent.emit(val);
  }

  onCreateSubject(val: string) {
    this.CreateTaskSubject.next(val);
  }
}
