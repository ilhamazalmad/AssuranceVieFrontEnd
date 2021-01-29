import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/login/login.component';
import {ProfilComponent} from '../app/profil/profil.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Profile',component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
