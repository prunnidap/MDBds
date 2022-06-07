import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { PagerespoComponent } from './respo/pagerespo/pagerespo.component';
import { PagemembreComponent } from './membre/pagemembre/pagemembre.component';
import { RespoformComponent } from './respo/respoform/respoform.component';
import { MembreformComponent } from './membre/membreform/membreform.component';
import {FormsModule} from "@angular/forms";
import { AnnoncesComponent } from './annonces-related/annonces/annonces.component';
import { AnnoncesListComponent } from './annonces-related/annonces-list/annonces-list.component';
import { TexteannonceComponent } from './annonces-related/texteannonce/texteannonce.component';
import { ProfilComponent } from './profil/profil.component';
import { FooterComponent } from './footer/footer.component';
import { SportComponent } from './sport/sport.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { SportFormComponent } from './sport-form/sport-form.component';
import { CreneauComponent } from './creneau/creneau.component';
import { CreneauListComponent } from './creneau-list/creneau-list.component';
import { CreneauFormComponent } from './creneau-form/creneau-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CreateAccountComponent } from './create-account/create-account.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    PagerespoComponent,
    PagemembreComponent,
    RespoformComponent,
    MembreformComponent,
    AnnoncesComponent,
    AnnoncesListComponent,
    TexteannonceComponent,
    ProfilComponent,
    FooterComponent,
    SportComponent,
    SportListComponent,
    SportFormComponent,
    CreneauComponent,
    CreneauListComponent,
    CreneauFormComponent,
    LoginFormComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

