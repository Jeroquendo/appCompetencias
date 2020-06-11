import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { DashboardComponent } from './dashboard/dashboard.component';    
import { LoginComponent } from './login/login.component';    
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultsComponent } from './results/results.component';
export const routes: Routes = [    
  {    
    path: '',    
    redirectTo: 'login',    
    pathMatch: 'full',    
  },    
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'dashboard',    
    component: DashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },   
  {    
    path: 'register',    
    component: RegisterComponent,    
    data: {    
      title: 'Register Page'    
    }    
  },
  {    
    path: 'inicio',    
    component: InicioComponent,    
    data: {    
      title: 'Inicio Page'    
    }    
  }, 

  {    
    path: 'results',    
    component: ResultsComponent,    
    data: {    
      title: 'Results Page'    
    }    
  } 
  

];    
@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { }
