import { Component, OnInit } from '@angular/core';
import {Creneau} from "../classes/Creneau";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {CreneauService} from "../services/creneau.service";

@Component({
  selector: 'app-creneau-list',
  templateUrl: './creneau-list.component.html',
  styleUrls: ['./creneau-list.component.css']
})
export class CreneauListComponent implements OnInit {
  creneauArray : Creneau[] = []
  respo : boolean
  constructor(service : CreneauService, serviceLogin : LoginService, private routeur : Router) {
    this.creneauArray=service.getCreneaux()
    this.respo = serviceLogin.getLogin().respo
  }

  ngOnInit(): void {
  }
  rediriger(){
    this.routeur.navigateByUrl('/ajoutCreneau')
  }
}
