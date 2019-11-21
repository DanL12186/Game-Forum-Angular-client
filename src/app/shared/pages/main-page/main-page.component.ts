import { Component, OnInit } from '@angular/core';
import { GamePageService } from '../../services/game-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private gamePageService : GamePageService
  ) { }

  ngOnInit() {
    this.gamePageService.getGame();
  }

}
