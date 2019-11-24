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
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
import { UserActivityTableComponent } from './components/user-activity-table/user-activity-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardTableComponent,
    NavbarComponent,
    SignUpCardComponent,
    MainPageComponent,
    SignUpPageComponent,
    UserProfileCardComponent,
    UserProfilePageComponent,
    UserActivityTableComponent
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
