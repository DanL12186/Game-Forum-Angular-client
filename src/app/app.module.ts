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
import { CarouselNewComponent } from './carousel-new/carousel-new.component';
import { CarouselPopularComponent } from './carousel-popular/carousel-popular.component';
import { GameCardTableComponent } from './shared/components/game-card-table/game-card-table.component';
import { MainPageComponent } from './shared/pages/main-page/main-page.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    CarouselPopularComponent,
    CarouselNewComponent,
    NavbarComponent,
    GameCardTableComponent,
    MainPageComponent,
    GameDetailComponent,
    SearchResultsComponent,
    CommentComponent
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