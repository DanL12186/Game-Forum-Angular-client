import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ----- Pages
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { UserProfilePageComponent } from './pages/user-profile-page/user-profile-page.component';
// ----- Components
import { GameCardTableComponent } from './components/game-card-table/game-card-table.component';


export const routes: Routes = [
  { path: '', 
    redirectTo: '/main-page', 
    pathMatch: 'full' },
  { path: 'main-page',
    component: MainPageComponent},
  { path: 'game-table',
    component: GameCardTableComponent},
  { path: 'sign-up',
    component: SignUpPageComponent},
  { path: 'user-profile',
    component: UserProfilePageComponent
  }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
