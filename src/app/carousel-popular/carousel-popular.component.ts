import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GamePageService } from '../shared/services/game-page.service';
import { GameData } from '../shared/modules/gameData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel-popular',
  templateUrl: './carousel-popular.component.html',
  styleUrls: ['./carousel-popular.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselPopularComponent implements OnInit {
  constructor(private gamePageService : GamePageService) { }

  public gameArray : GameData[];
  public gameSubscription: Subscription;
  public games: any = [[]];
  
  //resp
  async getGames() {
    this.gameSubscription = this.gamePageService.gamesArray
      .subscribe(data => {
        console.log('this is happening');
        console.log(data);
        this.gameArray = data;
      });
  }

  ngOnInit() {
    this.getGames()
  }

}



