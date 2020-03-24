import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewListComponent } from './components/new-list/new-list.component';
import { NewTaskComponent } from './components/new-task/new-task.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/5e79db4b52e8f9346410261f',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:listId',
    component: DashboardComponent
  },
  {
    path: 'new-list',
    component: NewListComponent
  },
  {
    path: 'new-task/:listId',
    component: NewTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
