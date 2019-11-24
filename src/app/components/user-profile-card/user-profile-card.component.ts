import { Component, OnInit } from '@angular/core';
// ----- Services
import { UserService } from 'src/app/services/user.service';
// ----- Modules
import { NewUser } from 'src/app/modules/newUser';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrls: ['./user-profile-card.component.scss']
})
export class UserProfileCardComponent implements OnInit {

  private user : NewUser = this.userService.user;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
  }

}
