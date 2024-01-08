import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern('[user]+@[gmail]+\.com$')]),
    password:new FormControl('',[Validators.required,Validators.pattern('^User@123$')])
  })
  constructor(private route:Router){

  }
  get Id(){
    return this.loginForm.get('id');
  }
  get EmailId(){
    return this.loginForm.get('emailId');
  }

  get Password(){
    return this.loginForm.get('password');
  }
  
  loginFormSubmit(){
      this.route.navigate(['/user/task-inbox']);
  }
}
