import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-user-left-nav',
  templateUrl: './user-left-nav.component.html',
  styleUrls: ['./user-left-nav.component.css']
})
export class UserLeftNavComponent {
  taskForm = new FormGroup({
    task_id:new FormControl('',[Validators.required]),
    task_name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    overdue:new FormControl('',[Validators.required])
  })
  task: TaskComponent = new TaskComponent();
  constructor(private serv: MyServiceService,private router: Router) { }
  get TaskId(){
    return this.taskForm.get('task_id');
  }
  get TaskName(){
    return this.taskForm.get('task_name');
  }
  get desc(){
    return this.taskForm.get('description');
  }

  get Overdue(){
    return this.taskForm.get('overdue');
  }
  taskFormSubmit(){
    this.saveTask();
    alert("Added Task Successfully");
    this.router.navigate(['/user/inbox']);
  }
  saveTask() {
    this.serv.createTask(this.task).subscribe( data =>{
      console.log(data);
      window.location.reload();
      this.goToTasksList();
    },
    error => console.log(error));
  }
  goToTasksList(){
    this.router.navigate(["/user/task-inbox"]);
  }
}