import { Component, OnInit, inject } from '@angular/core';
import { DatastreamService } from '../../services/datastream.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-data',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-data.component.html',
  styleUrl: './todo-data.component.css'
})
export class TodoDataComponent implements OnInit {
  tasks: string[] = ['Learn Angular', 'Cliet Work', 'React'];
  dataStreamService: DatastreamService = inject(DatastreamService);
  constructor() { } 

  ngOnInit() {
    this.dataStreamService.CreateTaskEvent.subscribe(task => {
      this.tasks.push(task);
    });

    this.dataStreamService.CreateTaskSubject.subscribe(task => {
      this.tasks.push(task);
    })
  }
}
