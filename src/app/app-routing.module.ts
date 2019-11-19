import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

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
