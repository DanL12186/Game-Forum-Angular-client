import { Injectable } from '@angular/core';
// ----- Router/HTTP
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// ----- RXJS
import { Subject, Observable, Subscription } from 'rxjs';
// ----- Modules
import { GameData } from '../modules/gameData';

@Injectable({
  providedIn: 'root'
})
export class GamePageService {
  public gamesSubject : Subject<GameData[]> = new Subject();
  public gamesArray : Observable<GameData[]>
    = this.gamesSubject.asObservable();

  public gameSubscription : Subscription;

  constructor(
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit() { }


  async getGame() {
    const url : string = 'http://localhost:8080/IGDB';
    let newGamesArray : GameData[] = [];

    if (this.gameSubscription) {
      this.gameSubscription.unsubscribe();
    }

    this.gameSubscription = await this.httpClient.get(url)
      .subscribe((data : GameData[]) => {
        data.forEach( function(data) {
          newGamesArray.push(data)
        });
    });
    console.log("New Games Array (getGame())");
    console.log(newGamesArray);
    this.gamesSubject.next(newGamesArray);
  }
}
