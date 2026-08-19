import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

import { AngularInterviewLabComponent } from './components/angular-interview-lab/angular-interview-lab.component';

import { ParentComponent } from './components/01-parent-child/parent/parent.component';

export const routes: Routes = [
  // Existing Login
  {
    path: '',
    component: LoginComponent,
  },

  // Existing Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },

  // Angular Interview Lab
  {
    path: 'angular-lab',
    component: AngularInterviewLabComponent,
  },

  // Exercise 01
  {
    path: 'angular-lab/01-parent-child',
    component: ParentComponent,
  },

  // Unknown route
  {
    path: '**',
    redirectTo: '',
  },
];
