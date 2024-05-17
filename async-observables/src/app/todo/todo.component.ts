import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatastreamService } from '../../services/datastream.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask: string = '';
  dataStreamService: DatastreamService = inject(DatastreamService);

  createTask() {
    console.log(this.newTask);
    this.dataStreamService.onCreateTask(this.newTask);
    this.newTask = '';
  }

  createSubjectTask() {
    this.dataStreamService.onCreateSubject(this.newTask);
    this.newTask = '';
  }
}
