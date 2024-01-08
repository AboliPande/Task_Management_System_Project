import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  template: `
    <p>
      task works!
    </p>
  `,
  styles: [
  ]
})
export class TaskComponent {
  task_id:number=0;
  task_name:string="";
  description:string="";
  overdue:Date=new Date();
}
