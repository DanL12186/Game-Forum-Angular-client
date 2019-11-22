import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './shared/components/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];
=======
import { GamesComponent } from './games/games.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameCardTableComponent } from './shared/components/game-card-table/game-card-table.component';
import { MainPageComponent } from './shared/pages/main-page/main-page.component';
>>>>>>> a4379f37a4cd85e4d15a562f8b63f1006c86bea5

const routes: Routes = [
  { path: '', 
    redirectTo: '/main-page', 
    pathMatch: 'full' },
  { path: 'main-page',
    component: MainPageComponent},
  { path: 'home',
    component: HomePageComponent},
  { path: 'games', 
    component: GamesComponent},
  { path: 'game-table',
    component: GameCardTableComponent}
];
@NgModule({
<<<<<<< HEAD
  imports:[ 
    RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignUpComponent
    },
    {
      path: 'userProfile',
      component: UserProfileComponent

    }

  ]),
  ],
=======
  imports:[RouterModule.forRoot(routes)],
>>>>>>> a4379f37a4cd85e4d15a562f8b63f1006c86bea5
  exports: [RouterModule]
})
export class AppRoutingModule { }
