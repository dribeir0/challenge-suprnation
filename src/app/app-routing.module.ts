import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskAComponent } from './task-a/task-a.component';
import { TaskDComponent } from './task-d/task-d.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', component: TaskAComponent },
  { path: 'd', component: TaskDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
