import { Injectable } from '@angular/core';
// ----- Routing/HTTP
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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


  login(username: string, password: string) {

    const credentials = {
      username: username,
      password: password
    }

    console.log(credentials);

    const url = 'http://localhost:8080/users/login';
    this.httpClient.post(url, credentials)
      .subscribe((data : string) => {
        this.token = data;
        console.log(data)
      })
  }

  signup(FirstName: string, LastName: string, email: string, password: string) {

    const SignUPcredentials = {
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password
    }
    const url = 'http://localhost:8080/user';


    this.httpClient.post(url, SignUPcredentials)
      .subscribe(data => {
        console.log(data)
      })
  }
}
