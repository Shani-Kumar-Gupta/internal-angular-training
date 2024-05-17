import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { TodoDataComponent } from '../todo-data/todo-data.component';

@Component({
  selector: 'app-shared-data',
  standalone: true,
  imports: [TodoComponent, TodoDataComponent],
  templateUrl: './shared-data.component.html',
  styleUrl: './shared-data.component.css'
})
export class SharedDataComponent {

}
