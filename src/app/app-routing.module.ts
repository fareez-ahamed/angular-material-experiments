import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { UsersTableComponent } from './users-module/users-table/users-table.component';

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'users', component: UsersTableComponent },
  // { path: 'add', component: AddUsersFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
