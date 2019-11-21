import { Component, OnInit } from '@angular/core';

import { GameData } from './../../modules/gameData';
import { GamePageService } from '../../services/game-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-card-table',
  templateUrl: './game-card-table.component.html',
  styleUrls: ['./game-card-table.component.scss']
})
export class GameCardTableComponent implements OnInit {
  
  public gameArray : GameData[];
  public gameSubscription: Subscription;
  
  constructor(private gamePageService: GamePageService) { }

  ngOnInit() {
    console.log("this is happening");
    this.gameSubscription = this.gamePageService.gamesArray
      .subscribe(data => {
        console.log('this is happening');
        console.log(data);
        this.gameArray = data;
      });
  }

  selectGame(gameId : number) {
    console.log('selectGame() is happening');
  }

}
