import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string){

    const credentials = {
      username: username, 
      password : password
    }
    
    const url = 'http://localhost:8080/user';


    this.httpClient.post(url, credentials)
      .subscribe(data=>{
        console.log(data)
      })
  }
}
