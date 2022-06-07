import {Component, Input, OnInit} from '@angular/core';
import {Annonces} from "../classes/Annonces";
import {Sports} from "../classes/Sports";
import {Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  @Input() sport! : Sports
  constructor(private routeur : Router, private navbar : NavbarComponent) { }

  ngOnInit(): void {
  }
  rediriger(){
    this.navbar.login.sportSelectionne = this.sport.nom
    this.routeur.navigateByUrl('/creneaux')
  }
}
