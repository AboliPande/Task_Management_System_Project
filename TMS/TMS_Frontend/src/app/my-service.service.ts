import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskComponent } from './task/task.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  private baseURL = "http://localhost:8080/api/v1/tasks";
  constructor(private httpClient:HttpClient) { }
  getAllTasks():Observable<TaskComponent[]>{
    return this.httpClient.get<TaskComponent[]>(`${this.baseURL}`);
  }
  getTaskById(task_id: number): Observable<TaskComponent>{
    return this.httpClient.get<TaskComponent>(`${this.baseURL}/${task_id}`);
  }
  deleteTask(task_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${task_id}`);
  }
  createTask(task:TaskComponent): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, task);
  }
  updateTask(task_id: number, task: TaskComponent): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${task_id}`,task);
  }

}