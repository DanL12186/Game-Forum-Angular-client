import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Game } from "../shared/modules/game";
import { Review } from "../shared/modules/review";
import { User } from "../shared/modules/User";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-game-detail",
  templateUrl: "./game-detail.component.html",
  styleUrls: ["./game-detail.component.scss"]
})
export class GameDetailComponent implements OnInit {
  public game: Object;
  public backendGameId: Object;
  public backendId: number = 2;
  public rating: number;
  public description: string;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  async findGamebyName() {
    const gameTitle: string = this.route.snapshot.paramMap.get("name");
    const url: string = `http://localhost:8080/IGDB/search`;

    const searchResults = await this.httpClient
      .post(url, `"${gameTitle}"`)
      .toPromise();

    //grabbing the first search result, as exact results are returned first
    return searchResults[0];
  }

  async getGameIdByIgdbId() {
    const gameUrl: string = `http://localhost:8080/games/${this.game.id}`;
    const game = await this.httpClient.get(gameUrl).toPromise();
    return game.id;
  }

  async getReviews() {
    const gameId = await this.getGameIdByIgdbId();
    const reviews = await this.httpClient
      .get(`http://localhost:8080/reviews/game=${gameId}/page=0`)
      .toPromise();
    this.game["reviews"] = reviews;

    console.log("reviews", reviews);
  }

  loggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  async ngOnInit() {
    this.user = this.userService.getUser();

    this.game = await this.findGamebyName();

    this.getReviews();

    //checking to see if it exists
    const game: Game = { igdbId: this.game.id };
    const backend = await this.httpClient.post("/games", game);

    if (backend) {
      this.backendGameId = backend;
    } else {
      await this.httpClient
        .get(`http://localhost:8080/games/${this.game.id}`)
        .toPromise();
    }
  }

  async addReview() {
    if (this.rating < 0 || this.rating > 100) return;

    const review = {
      rating: this.rating,
      description: this.description
    };
    console.log(review);

    await this.httpClient
      .post(
        `http://localhost:8080/reviews/add/game=${this.game.id}/user=${this.user.id}`,
        review
      )
      .toPromise();
    location.reload();
  }
}
