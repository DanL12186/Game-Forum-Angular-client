import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  private REST_API_SERVER = "http://localhost:8080";
  
  public games;

  private propertySortedAsc = {
    name: false,
    year: false,
  }

  constructor(private httpClient: HttpClient) { }

  //lexicographical sort of string-based properties;
  //reverses order (ascending => descending) when re-clicked
  sortByProperty(property: string) {
    this.games.sort((a : string, b : string) => a[property].localeCompare(b[property]));

    if (this.propertySortedAsc[property]) {
      this.games = this.games.reverse();
    }

    this.propertySortedAsc[property] = !this.propertySortedAsc[property]
  }

  async ngOnInit() {
    this.games = await this.httpClient.get(`${this.REST_API_SERVER}/IGDB`).toPromise();
  }

}
