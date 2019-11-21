import { Injectable } from '@angular/core';
import { HttpClient } from '@Angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }
UserCard(){



}
myGameList(reviews: string, comments: string, friends: string){

const tabs ={
  reviews : reviews,
  comments : comments,
  friends : friends
}

const url = 'http://localhost:8080/user/login';
}


}
