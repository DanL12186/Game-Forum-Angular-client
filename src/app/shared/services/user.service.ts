import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
 
  // Create credentials object using username and password from parameters
  // Pass credentials to url using http post method.
  // Server returns data and we print it.

  
  login(username: string, password: string){

    const credentials = {
      username: username, 
      password : password
    }

  
    const url = 'http://localhost:8080/user/login';


    this.httpClient.post(url, credentials)
      .subscribe(data=>{
        console.log(data)
      })
  }

  signup(FirstName: string, LastName: string, email: string, password: string ){

    const SignUPcredentials = {
      FirstName : FirstName,
      LastName : LastName,
      email : email,
      password : password,
      
}
  
    const url = 'http://localhost:8080/user';

    this.httpClient.post(url, SignUPcredentials)
      .subscribe(data=>{
        console.log(data)
      })
  }


}