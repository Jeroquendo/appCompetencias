import { BrowserModule } from '@angular/platform-browser';  
import { HttpClientModule } from '@angular/common/http';  
import { NgModule } from '@angular/core';  
import { AppComponent } from './app.component';  
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { LoginComponent } from './login/login.component';  
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';  
import { AppRoutingModule } from '../app/app-routing.module';  
import { RouterModule } from '@angular/router';

@NgModule({  
  declarations: [  
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule, 
    AppRoutingModule

  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }