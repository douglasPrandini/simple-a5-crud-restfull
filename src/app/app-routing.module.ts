import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { UserFormComponent } from './user-form/user-form.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'create', component: CreateUserComponent },
  { path: 'edit/:id', component: EditUserComponent }  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
