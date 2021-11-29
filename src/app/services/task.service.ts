import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  task: any;
  // private apiUrl = 'http://localhost:5000/tasks';

  // constructor(private http: HttpClient) {}

  getTasks(): Task[] {
    return TASKS;
  }

  deleteTask(task: Task): Task {
    return task;
  }

  updateTaskReminder(task: Task): Task {
    return task;
  }

  addTask(tasks: Task): Task {
    return tasks;
  }
}
