import { Component, OnInit } from '@angular/core';
import {Login} from "../classes/Login";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  login : Login

  constructor(private service : LoginService, private  routeur : Router, private navbar:NavbarComponent) {
    this.login = new Login(1, "", "", false, true, false, "")
  }

  ngOnInit(): void {
  }
  respo(){
    this.login.respo=true
    this.login.membre=false
    this.login.invite=false
  }
  submit(){
    this.service.addLogin(this.login);
    // A enlever
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/profil')
  }
  invite(){
    this.login.invite=true
    this.login.membre=false
    this.service.addLogin(this.login);
  }
  connexion(){
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/connexion')
  }
}
