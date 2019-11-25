import { Injectable } from '@angular/core';
// ----- Routing/HTTP
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// ----- RXJS
import { Subject, Observable, Subscription } from 'rxjs';
// ----- Modules
import { NewUser } from '../modules/newUser';
import { Credentials } from '../modules/credentials';
import { Comment } from '../modules/comment';
import { Review } from '../modules/review';
import { Friend } from '../modules/friend';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token : string;
  public currentUsername : string;

  // ----- Setting up an observable array of comments for user-profile page.
  public commentsSubject : Subject<Comment[]> = new Subject();
  public commentsArray : Observable<Comment[]>
    = this.commentsSubject.asObservable();

  public commentSubscription : Subscription;

  // ----- Setting up an observable array of reviews for user-profile page.
  public reviewsSubject : Subject<Review[]> = new Subject();
  public reviewsArray : Observable<Review[]>
    = this.reviewsSubject.asObservable();

  public reviewSubscription : Subscription;

  //----- Setting up an observable array for of friends for user profile page.
  public friendSubject : Subject<Friend[]> = new Subject();
  public friendArray : Observable<Friend[]>
    = this.friendSubject.asObservable();

    public friendSubscription : Subscription;

  // Mock code of a user instance to write user-profile w/o functioning
  // get http call. 
  public user : NewUser = {
    firstName : 'Kevin',
    lastName : 'Saephanh',
    username : 'Kevin',
    email : 'KevinSaephanh@ucsb.edu',
    password : 'Kevin777',
    role : {
      id : 1,
      roleName : 'user'
    }
  }

  // Mock user service layer id for User above. Should be pulled w/ a 
  // http call not available.
  public userId : number = 9;

  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  // Create credentials object using username and password from parameters
  // Pass credentials to url using http post method.
  // Server returns data and we print it.
  login(credentials : Credentials) {
    const url = 'http://localhost:8080/users/login';
    this.httpClient.post(url, credentials)
      .subscribe((data : string) => {
        this.token = data;
        if (data != null) {
          this.currentUsername = credentials.username;
        }
      })
  }

  signup(newUser : NewUser) {
    const url = 'http://localhost:8080/users';
    this.httpClient.post(url, newUser)
      .subscribe((data : NewUser) => {
        let loginCredentials : Credentials = {
          username : data.username,
          password : newUser.password
        }

        this.login(loginCredentials);
      })
  }

  async getComments(userid : number, page: number) {
    const url = 'http://localhost:8080/comments/user='+ userid + '/page='+ page;
    let newCommentsArray : Comment[] = [];

    if (this.commentSubscription) {
      this.commentSubscription.unsubscribe();
    }

    this.commentSubscription = await this.httpClient.get(url)
      .subscribe((data : Comment[]) => {
        data.forEach( (data : Comment) => {
          newCommentsArray.push(data);
        });
        this.commentsSubject.next(newCommentsArray);
      })
  }

  async getReviews(userid : number, page : number) {
    const url = 'http://localhost:8080/reviews/user='+ userid + '/page='+ page;
    let newReviewsArray : Review[] = [];

    if (this.reviewSubscription) {
      this.reviewSubscription.unsubscribe();
    }

    this.reviewSubscription = await this.httpClient.get(url)
      .subscribe((data : Review[]) => {
        data.forEach( (data : Review) => {
          newReviewsArray.push(data);
        });
        this.reviewsSubject.next(newReviewsArray);
      });
  }

  async getFriends(userid : number) {
    const url = 'http://localhost:8080/users/' + userid + '/friends';
    let newFriendArray : Friend[] = [];

    if (this.friendSubscription){
      this.friendSubscription.unsubscribe();
    }

    this.friendSubscription = await this.httpClient.get(url)
      .subscribe((data : Friend[]) => {
        data.forEach(( data : Friend) => {
          newFriendArray.push(data);
        });
        this.friendSubject.next(newFriendArray);
      })
    console.log(newFriendArray);
  }
}