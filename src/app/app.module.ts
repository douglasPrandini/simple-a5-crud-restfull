import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
