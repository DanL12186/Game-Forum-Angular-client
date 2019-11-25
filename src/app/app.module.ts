import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { WavesModule, TableModule } from "angular-bootstrap-md";

import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { AppComponent } from "./app.component";


import { CarouselNewComponent } from "./carousel-new/carousel-new.component";
import { CarouselPopularComponent } from "./carousel-popular/carousel-popular.component";
import { GameCardTableComponent } from "./shared/components/game-card-table/game-card-table.component";
import { MainPageComponent } from "./shared/pages/main-page/main-page.component";
import { GameDetailComponent } from "./game-detail/game-detail.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { CommentComponent } from "./comment/comment.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignUpPageComponent } from './shared/pages/sign-up-page/sign-up-page.component';
import { UserProfilePageComponent } from './shared/pages/user-profile-page/user-profile-page.component';
import { SignUpCardComponent } from './shared/components/sign-up-card/sign-up-card.component';
import { UserActivityTableComponent } from './shared/components/user-activity-table/user-activity-table.component';
import { UserProfileCardComponent } from './shared/components/user-profile-card/user-profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselPopularComponent,
    CarouselNewComponent,
    NavbarComponent,
    GameCardTableComponent,
    MainPageComponent,
    GameDetailComponent,
    SearchResultsComponent,
    CommentComponent,
    SignUpPageComponent,
    UserProfilePageComponent,
    SignUpCardComponent,
    UserActivityTableComponent,
    UserProfileCardComponent
  ],
  imports: [
    HttpClientModule,
    WavesModule,
    TableModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
