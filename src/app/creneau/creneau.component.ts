import {Component, Input, OnInit} from '@angular/core';
import {Creneau} from "../classes/Creneau";
import {SportService} from "../services/sport.service";
import {Router} from "@angular/router";
import {Sports} from "../classes/Sports";
import {CreneauService} from "../services/creneau.service";
import {ProfilService} from "../services/profil.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {Profil} from "../classes/Profil";

@Component({
  selector: 'app-creneau',
  templateUrl: './creneau.component.html',
  styleUrls: ['./creneau.component.css']
})
export class CreneauComponent implements OnInit {
  @Input() creneau! : Creneau
  profil! : Profil
  idUser! : number
  isRespo! : boolean
  constructor(private  routeur : Router, private serviceCreneau:CreneauService, private serviceProfil : ProfilService, private navbar:NavbarComponent) {
    this.isRespo=navbar.login.respo
    this.profil = serviceProfil.profil
  }

  ngOnInit(): void {
  }
  reserver(){
    this.idUser=this.serviceProfil.profil.id
    this.serviceCreneau.reserver(this.serviceProfil.getProfil(this.idUser), this.creneau.id)
  }
  annuler(){
    for(let i = 0;i < this.creneau.participants.length;i++)
    {
      if(this.creneau.participants[i] == this.profil)
      {
        this.creneau.participants.splice(i, 1)
        break
      }
    }
  }
}
