import { NgModule } from '@angular/core';
import {RouterModule, Routes  } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GalerieFilmsComponent } from './galerie-films/galerie-films.component';

const routes: Routes = [
{
  path: 'signup',
component: SignUpComponent},
{
    path: 'user',
  component: UserProfileComponent
  },
  {
    path: 'film',
    component: GalerieFilmsComponent
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
