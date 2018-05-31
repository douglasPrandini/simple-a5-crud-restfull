import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public formGroup;
  user = new User();
    
  constructor(private readonly httpClient: HttpClient,
              private userService: UserService) {  }

  valuesubmited:string="";

  ngOnInit() {
  }

  public onSubmit(ngForm:NgForm): void {
    if (ngForm.valid) {
      this.add(this.user);
      ngForm.reset();
    }
  }

  private add(user:User){
    user.id = 0;
    this.userService.addNewUser(this.user);
  }

}
