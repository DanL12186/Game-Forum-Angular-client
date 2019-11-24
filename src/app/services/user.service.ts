import { Injectable } from '@angular/core';
// ----- Routing/HTTP
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// ----- Modules
import { NewUser } from '../modules/newUser';
import { Credentials } from '../modules/credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token : string;
  public currentUsername : string;

  public commentsArray;

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

  getComments(userid : number, page: number) {
    const url = 'http://localhost:8080/comments/user='+ userid + '/page='+ page;

    this.httpClient.get(url)
    .subscribe(data => {
      console.log(data);
      this.commentsArray = data;
    })
  }
}