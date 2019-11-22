import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  public game : Object;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  async findGamebyName() {
    const gameTitle = this.route.snapshot.paramMap.get('name');
    const url : string = `http://localhost:8080/IGDB/search`;
    
    const searchResults = await this.httpClient
                                    .post(url, `"${gameTitle}"`)
                                    .toPromise();
                                    
    //grabbing the first search result, as exact results are returned first
    return searchResults[0];
  }

  async ngOnInit() {    
    this.game = await this.findGamebyName();
  }

}
