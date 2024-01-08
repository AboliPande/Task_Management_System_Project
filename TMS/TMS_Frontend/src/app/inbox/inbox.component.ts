import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServiceService } from '../my-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  tasks: TaskComponent[] | undefined;
  constructor(private router:Router,private serv:MyServiceService,private route: ActivatedRoute){}
  task: TaskComponent = new TaskComponent();
  updateTaskForm = new FormGroup({
    Task_id:new FormControl('',[Validators.required]),
    task_name:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    overdue:new FormControl('',[Validators.required])
  })
  get TaskId(){
    return this.updateTaskForm.get('Task_id');
  }
  get TaskName(){
    return this.updateTaskForm.get('task_name');
  }
  get desc(){
    return this.updateTaskForm.get('description');
  }

  get Overdue(){
    return this.updateTaskForm.get('overdue');
  }
  ngOnInit(){
    this.getTasks(); 
  }
  private getTasks(){
    this.serv.getAllTasks().subscribe(data => {
      this.tasks = data;
    });
  }
  deleteTask(id:number){
    this.serv.deleteTask(id).subscribe( data => {
      console.log(data);
      window.location.reload();
      this.getTasks();
    })
  }
  
  goToTaskList() {
    this.router.navigate(['/user/task-inbox']);
  }
  updateTask(id:number){
      this.saveChanges(id);
  }
  saveChanges(id:number){
    this.serv.updateTask(id, this.task).subscribe( data =>{
      console.log(this.task);
      window.location.reload();
      this.goToTaskList();
    }
    , error => console.log(error));
    alert("Updated Task Successfully");
  }
}
