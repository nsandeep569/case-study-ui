import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth.guard';


import {LoginComponent} from './login/login.component';
import {QuotesAllComponent} from './quotes-all/quotes-all.component'
import {RegisterComponent} from './register/register.component'
const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'quotes',
    component:QuotesAllComponent,
    canActivate: [AuthGuardService],
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
