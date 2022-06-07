import { Component, OnInit } from '@angular/core';
import {Sports} from "../classes/Sports";
import {SportService} from "../services/sport.service";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css']
})
export class SportListComponent implements OnInit {
  sportArray : Sports[] = []
  respo : boolean
  constructor(service : SportService, serviceLogin : LoginService, private routeur : Router) {
    this.sportArray=service.getSports()
    this.respo = serviceLogin.getLogin().respo
  }

  ngOnInit(): void {
  }
  rediriger(){
    this.routeur.navigateByUrl('/ajoutSport')
  }
}
