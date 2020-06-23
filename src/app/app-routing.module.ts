import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { ResultsComponent } from './results/results.component';
import { Level1Component } from './level1/level1.component';
import { Level3Component } from './level3/level3.component';
import { Level2Component } from './level2/level2.component';
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
  },

  {
    path: 'level1',
    component: Level1Component,
    data: {
      title: 'Level1 Page'
    }
  },

  {
    path: 'level2',
    component: Level2Component,
    data: {
      title: 'Level2 Page'
    }
  },
  {
    path: 'level3',
    component: Level3Component,
    data: {
      title: 'Level3 Page'
    }
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
