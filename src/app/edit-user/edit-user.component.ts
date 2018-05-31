import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user : User;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private readonly httpClient: HttpClient,
    private userService: UserService) {  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {this.user = user});
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.location.back());
  }
}
