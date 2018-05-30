import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  public formGroup;
    
  constructor(private readonly httpClient: HttpClient) {  }

  valuesubmited:string="";

  ngOnInit() {
  }

  public onSubmit(ngForm:NgForm): void {
    if (ngForm.valid) {
      console.log(ngForm.value);
      console.log("Form Submitted!");

      ngForm.reset();
    }
  }

}
