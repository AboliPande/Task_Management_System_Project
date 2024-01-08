import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserLeftNavComponent } from './user-left-nav/user-left-nav.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  {
    path: '',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path: '',redirectTo:'task-inbox',pathMatch:'full'
      },
      {
        path:'task-inbox',
        component:InboxComponent
      }
    ]
  },
  {
    path:'user-left-nav',
    component:UserLeftNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
