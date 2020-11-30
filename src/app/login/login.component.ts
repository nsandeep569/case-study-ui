import { Component, OnInit } from '@angular/core';
import {LoginService} from './../services/login.service'
import { Router, ActivatedRoute } from '@angular/router';

export interface User{
  name:string;
  password:string;
  level:number;

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  user:User;
  error:string=null;
  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.user={name:null,password:null,level:null}
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('logged_in_user_name')
    sessionStorage.removeItem('level')
    
  }
  onSubmit(){
    console.log(this.user.name,this.user.password)
    this.loginService.performLogin(this.user).subscribe((data)=>{
    console.log(data)
    this.error=null
    sessionStorage.setItem('access_token',data['access_token'])
    sessionStorage.setItem('logged_in_user_name',this.user.name)
    sessionStorage.setItem('level',data['level'])
    this.router.navigate(['/quotes'])
    }
    ,(err)=>{
      this.error=err.error.message
      console.log(this.error)
    })
  }

}
