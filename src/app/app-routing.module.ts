import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-users', pathMatch: 'full' },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'create', component: CreateUserComponent },
  { path: 'edit/:id', component: EditUserComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
