import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  search: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  searchGames() {
    console.log(this.search);

    this.router.navigate([`/search-results/${this.search}`]);
  }
}
