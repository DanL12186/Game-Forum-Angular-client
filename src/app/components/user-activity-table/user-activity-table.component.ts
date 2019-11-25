import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Comment } from 'src/app/modules/comment';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/modules/review';
import { Friend } from 'src/app/modules/friend';

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

  public reviewArray : Review[];
  public reviewSubscription : Subscription;

  public friendArray : Friend[];
  public friendSubscription : Subscription;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
    this.commentSubscription = this.userService.commentsArray
      .subscribe((data : Comment[]) => {
        this.commentArray = data;
        console.log(data);
      });

    this.reviewSubscription = this.userService.reviewsArray
      .subscribe((data : Review[]) => {
        this.reviewArray = data;
        console.log(data);
      });

    this.friendSubscription = this.userService.friendArray
      .subscribe((data : Friend[]) => {
        this.friendArray = data;
        console.log(data);
      });
  }

  select(activity : string) {
    console.log(activity);
    this.selected = activity;
    console.log(this.selected)
  }

}
