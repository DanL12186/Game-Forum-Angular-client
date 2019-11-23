import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ----- Routing/HTTP
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// ----- MDBBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MDBBootstrap } from './mdbbootstrap';
// ----- Components
import { AppComponent } from './app.component';
import { GameCardTableComponent } from './components/game-card-table/game-card-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignUpCardComponent } from './components/sign-up-card/sign-up-card.component';
// ----- Pages 
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
// ----- Services
import { UserService } from './services/user.service';
import { GamePageService } from './services/game-page.service';

@NgModule({
  declarations: [
    AppComponent,
    GameCardTableComponent,
    NavbarComponent,
    SignUpCardComponent,
    MainPageComponent,
    SignUpPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrap,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UserService, GamePageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
