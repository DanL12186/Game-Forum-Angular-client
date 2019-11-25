import { Component, OnInit } from '@angular/core';
// ----- RXJS
import { Subscription } from 'rxjs';
// ----- Modules
import { Comment } from '../../modules/comment';
import { Review } from '../../modules/review';
import { Friend } from '../../modules/friend';
import { UserService } from '../../services/user.service';

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
