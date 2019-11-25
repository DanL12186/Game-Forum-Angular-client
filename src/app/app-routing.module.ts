import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { GameCardTableComponent } from "./shared/components/game-card-table/game-card-table.component";
import { MainPageComponent } from "./shared/pages/main-page/main-page.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { CommentComponent } from "./comment/comment.component";
import { SignUpPageComponent } from "./shared/pages/sign-up-page/sign-up-page.component";
import { UserProfilePageComponent } from "./shared/pages/user-profile-page/user-profile-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/main-page", pathMatch: "full" },
  { path: "main-page", component: MainPageComponent },
  { path: "game-table", component: GameCardTableComponent },
  {
    path: "games/:name",
    component: GameDetailComponent
  },
  {
    path: "search-results/:name",
    component: SearchResultsComponent
  },
  {
    path: "reviews/:id/comments",
    component: CommentComponent
  },
  { path: "sign-up", component: SignUpPageComponent },
  { path: "user-profile", component: UserProfilePageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule {}
