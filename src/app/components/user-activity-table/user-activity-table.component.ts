import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-activity-table',
  templateUrl: './user-activity-table.component.html',
  styleUrls: ['./user-activity-table.component.scss']
})
export class UserActivityTableComponent implements OnInit {
  public selected : string = 'Reviews';
  public page : number = 0;

  public commentsArray = this.userService.commentsArray;

  constructor(
    private userService : UserService
  ) { 
    this.userService.getComments(this.userService.userId, this.page)
  }

  ngOnInit() {
  }

  select(activity : string) {
    console.log(activity);
    this.selected = activity;
    console.log(this.selected)
  }

}
