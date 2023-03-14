import { Component } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tara1: ITask = {
    title: 'Task1',
    description: 'description 1',
    completed: false,
    level: Levels.Info,
  };
  tara2: ITask = {
    title: 'Task2',
    description: 'description 2',
    completed: true,
    level: Levels.Urgent,
  };
  deleteTask(task: ITask) {
    alert(`Se procede a eliminar la tarea: ${task.title}`);
  }
}
