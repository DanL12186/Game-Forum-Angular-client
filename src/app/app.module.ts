import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, TableModule } from 'angular-bootstrap-md';

import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AppComponent } from './app.component';

import { LoginComponent } from './shared/components/login/login.component';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
<<<<<<< HEAD
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { GameListComponent } from './shared/components/game-list/game-list.component';
=======
import { CarouselNewComponent } from './carousel-new/carousel-new.component';
import { CarouselPopularComponent } from './carousel-popular/carousel-popular.component';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameCardTableComponent } from './shared/components/game-card-table/game-card-table.component';
import { MainPageComponent } from './shared/pages/main-page/main-page.component';

>>>>>>> a4379f37a4cd85e4d15a562f8b63f1006c86bea5

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
<<<<<<< HEAD
    UserProfileComponent,
    GameListComponent
=======
    CarouselPopularComponent,
    CarouselNewComponent,
    NavbarComponent,
    GamesComponent,
    GameComponent,
    HomePageComponent,
    GameCardTableComponent,
    MainPageComponent
>>>>>>> a4379f37a4cd85e4d15a562f8b63f1006c86bea5
  ],
  imports: [
    HttpClientModule,
    WavesModule,
    TableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }