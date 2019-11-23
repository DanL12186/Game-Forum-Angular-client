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
}
