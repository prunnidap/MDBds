import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';


import { ConnexionComponent } from './connexion/connexion.component';
import {PagerespoComponent} from "./respo/pagerespo/pagerespo.component";
import {PagemembreComponent} from "./membre/pagemembre/pagemembre.component";
import {AnnoncesListComponent} from "./annonces-related/annonces-list/annonces-list.component";
import {TexteannonceComponent} from "./annonces-related/texteannonce/texteannonce.component";
import { ProfilComponent } from './profil/profil.component';
import {SportListComponent} from "./sport-list/sport-list.component";
import {SportFormComponent} from "./sport-form/sport-form.component";
import {CreneauListComponent} from "./creneau-list/creneau-list.component";
import {CreneauFormComponent} from "./creneau-form/creneau-form.component";
import {MembreformComponent} from "./membre/membreform/membreform.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {CreateAccountComponent} from "./create-account/create-account.component";


const routes: Routes = [
  {path:'', component: LoginFormComponent},
  {path:'connexion', component: LoginFormComponent},
  {path:'creerCompte', component: CreateAccountComponent},
  {path:'pagerespo', component: PagerespoComponent},
  {path:'pagemembre', component: PagemembreComponent},
  {path:'sports', component: SportListComponent},
  {path:'ajoutSport', component: SportFormComponent},
  {path:'profil', component: ProfilComponent},
  {path:'creneaux', component: CreneauListComponent},
  {path:'ajoutCreneau', component: CreneauFormComponent},
  {path:'annonces',
    component: AnnoncesListComponent,
    children: [{
      path: 'texteannonce',
      component: TexteannonceComponent,}
    ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
