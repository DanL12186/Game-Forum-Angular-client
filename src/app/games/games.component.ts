import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private REST_API_SERVER = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    console.log(this.httpClient.get(`${this.REST_API_SERVER}/games`).toPromise());

    return this.httpClient.get(`${this.REST_API_SERVER}/games`);
  }

}
