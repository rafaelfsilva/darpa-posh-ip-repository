import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './components/dashboard';
import {IPComponent} from './components/ip-view';
import {IPListComponent} from './components/ip-list';
// import {AuthGuard} from './guards';
// import {LoginComponent} from './components/login';
// import {RegisterComponent} from './components/register';
// import {ProjectComponent} from './components/project';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'ip-list', component: IPListComponent},
  {path: 'ip-view/:ipID', component: IPComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'projects/:projectId', component: ProjectComponent},

  // otherwise redirect to dashboard
  {path: '**', redirectTo: ''}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
export const routing = RouterModule.forRoot(routes, {enableTracing: true});
