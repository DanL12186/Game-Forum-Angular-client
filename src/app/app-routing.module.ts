import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GameCardTableComponent } from './shared/components/game-card-table/game-card-table.component';
import { MainPageComponent } from './shared/pages/main-page/main-page.component';

const routes: Routes = [
  { path: '', 
    redirectTo: '/main-page', 
    pathMatch: 'full' },
  { path: 'main-page',
    component: MainPageComponent},
  { path: 'home',
    component: HomePageComponent},
  { path: 'game-table',
    component: GameCardTableComponent
  },
  {
    path: 'games/:name',
    component: GameDetailComponent
  }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
