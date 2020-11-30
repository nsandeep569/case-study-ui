import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuotesAllComponent } from './quotes-all/quotes-all.component';


import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';



import { LoginComponent } from './login/login.component';
import {AngularMaterialModule} from './modules/material.module'
import { FormsModule } from '@angular/forms';
import { HttpTokenInterceptor } from './http.token.interceptor';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    QuotesAllComponent,
    AppComponent,
    
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
