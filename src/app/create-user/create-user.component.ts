import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { User } from '../user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userFormGroup: FormGroup;
  isSubmitted: boolean = false;
  result: any = null;
  
  constructor(private frmBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.frmBuilder.group({
      email:["", [Validators.required]],
    });
  }


  save(){
    this.isSubmitted = true;
    if(!this.userFormGroup.valid)
        return;
        
    this.result = this.userFormGroup.value;
     setTimeout(()=> {
      this.result = null;
      this.reset();
     }, 2000);
  }
  
  reset(){
    this.isSubmitted = false;
    this.userFormGroup.reset();
    
  }

}
