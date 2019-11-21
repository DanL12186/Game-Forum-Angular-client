import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, redirectTo: '', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, pathMatch: 'full'},
];
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports:[ 
    RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'signup',
      component: SignUpComponent
    }

  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
