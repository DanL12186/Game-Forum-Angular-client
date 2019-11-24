import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/modules/comment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-activity-table',
  templateUrl: './user-activity-table.component.html',
  styleUrls: ['./user-activity-table.component.scss']
})
export class UserActivityTableComponent implements OnInit {
  public selected : string = 'Reviews';
  public page : number = 0;

  public commentArray : Comment[];
  public commentSubscription : Subscription;


  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.commentSubscription = this.userService.commentsArray
      .subscribe((data : Comment[]) => {
        this.commentArray = data;
        console.log(data);
      });
  }

  select(activity : string) {
    console.log(activity);
    this.selected = activity;
    console.log(this.selected)
  }

}
