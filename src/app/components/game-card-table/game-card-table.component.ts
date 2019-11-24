import { Component, OnInit } from '@angular/core';
// ----- RXJS
import { Subscription } from 'rxjs';
// ----- Services
import { GamePageService } from 'src/app/services/game-page.service';
// ----- Modules
import { GameData } from 'src/app/modules/gameData';

@Component({
  selector: 'app-game-card-table',
  templateUrl: './game-card-table.component.html',
  styleUrls: ['./game-card-table.component.scss']
})
export class GameCardTableComponent implements OnInit {
  
  public gameArray : GameData[];
  public gameSubscription: Subscription;
  
  constructor(private gamePageService : GamePageService) { }

  ngOnInit() {
    this.gameSubscription = this.gamePageService.gamesArray
      .subscribe(data => {
        this.gameArray = data;
      });
  }

  selectGame(gameId : number) {
    console.log('selectGame(' + gameId + ') is happening');
  }

  selectDisplay() { }

}
