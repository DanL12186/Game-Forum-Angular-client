import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Comment } from "../shared/modules/comment";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"]
})
export class CommentComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  public comments: Comment[];
  public description: string;
  public review;

  isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  async getReviewById() {
    const reviewId: string = this.route.snapshot.paramMap.get("id");

    return await this.httpClient
      .get(`http://localhost:8080/reviews/${reviewId}`)
      .toPromise();
  }

  async getCommentsByReview(reviewId) {
    return await this.httpClient
      .get(`http://localhost:8080/comments/review=${reviewId}/page=0`)
      .toPromise();
  }

  addComment() {
    const uid = 9;
    const rid = this.review.id;
    const comment = { description: this.description };

    this.httpClient
      .post(
        `http://localhost:8080/comments/add/review=${rid}/user=${this.user.id}`,
        comment
      )
      .toPromise();

    location.reload();
  }

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.review = await this.getReviewById();

    this.comments = await this.getCommentsByReview(this.review.id);
  }
}
