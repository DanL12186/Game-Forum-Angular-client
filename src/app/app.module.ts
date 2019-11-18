import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselPopularComponent } from './carousel-popular/carousel-popular.component';
import { CarouselNewComponent } from './carousel-new/carousel-new.component';

import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselPopularComponent,
    CarouselNewComponent,
    NavbarComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CarouselPopularComponent],
  entryComponents: [CarouselPopularComponent]
})
export class AppModule { }