import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public gameTitle : string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.gameTitle = this.route.snapshot.paramMap.get('name');

    const url : string = `http://localhost:8080/IGDB/search/${this.gameTitle}`;
    
    const resp = this.httpClient.get(url).toPromise();
    console.log('resp', resp);
  }

}
