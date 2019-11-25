import { Component, OnInit } from "@angular/core";
// ----- Services
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-user-profile-page",
  templateUrl: "./user-profile-page.component.html",
  styleUrls: ["./user-profile-page.component.scss"]
})
export class UserProfilePageComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();

    this.userService.getComments(this.user.id, 0);
    this.userService.getReviews(this.user.id, 0);
    this.userService.getFriends(this.userService.userId);
  }
}
