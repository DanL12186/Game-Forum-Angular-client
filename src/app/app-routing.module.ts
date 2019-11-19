import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, redirectTo: '', pathMatch: 'full' },
  { path: 'games', component: GamesComponent, pathMatch: 'full'},
];
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
