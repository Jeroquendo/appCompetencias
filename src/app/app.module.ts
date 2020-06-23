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
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { TipsDirective } from 'src/app/dashboard/tips.directive';
import { ResultsComponent } from './results/results.component';
import { HandleMouseEventDirective } from './directives/handle-mouse-event.directive';
import { Level1Component } from './level1/level1.component';
import { Level2Component } from './level2/level2.component';
import { Level3Component } from './level3/level3.component';

const config = new AuthServiceConfig([
  {
   id: FacebookLoginProvider.PROVIDER_ID,
   provider: new FacebookLoginProvider('697701760791342')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1041722941969-9ontj9ig4hir3uvtlqis4r693m8mlapo.apps.googleusercontent.com')
  }
 ]);

 export function provideConfig() {
  return config;
 }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    DashboardComponent,
    TipsDirective,
    ResultsComponent,
    HandleMouseEventDirective,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DragDropModule

  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
     },
     AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
