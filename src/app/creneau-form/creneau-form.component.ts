import { Component, OnInit } from '@angular/core';
import {Creneau} from "../classes/Creneau";
import {CreneauService} from "../services/creneau.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-creneau-form',
  templateUrl: './creneau-form.component.html',
  styleUrls: ['./creneau-form.component.css']
})
export class CreneauFormComponent implements OnInit {
  creneau : Creneau
  sport : string
  constructor(private service : CreneauService, private routeur : Router, private navbar : NavbarComponent) {
    this.sport = navbar.login.sportSelectionne
    this.creneau = new Creneau(0, "", "", "", "", "", "", "", "", "", 0, "", [])
  }

  ngOnInit(): void {
  }
  add()
  {
    this.service.addCreneau(this.creneau)
    this.routeur.navigateByUrl('/creneaux')
  }
}
