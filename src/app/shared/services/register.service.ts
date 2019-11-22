import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }
 
  signup(FirstName: string, LastName: string, email: string, password: string, PhoneNumber: number ){

    const SignUPcredentials = {
      FirstName : FirstName,
      LastName : LastName,
      email : email,
      password : password,
      PhoneNumber : PhoneNumber
}

  
    const url = 'http://localhost:8080/user/create';


    this.httpClient.post(url, SignUPcredentials)
      .subscribe(data=>{
        console.log(data)
      })
  }















}
