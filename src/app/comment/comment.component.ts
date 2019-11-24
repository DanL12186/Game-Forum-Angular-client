import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../shared/modules/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  public comments: Comment[];
  public review;

  async getReviewById() {
    const reviewId: string = this.route.snapshot.paramMap.get('id');

    return await this.httpClient.get(`http://localhost:8080/reviews/${reviewId}`).toPromise();
  }

  async getCommentsByReview(reviewId) {
    return await this.httpClient.get(`http://localhost:8080/comments/review=${reviewId}/page=0`).toPromise();

    console.log(this.comments)
  }

  async ngOnInit() {
    this.review = await this.getReviewById();

    this.comments = await this.getCommentsByReview(this.review.id);

  }

}
