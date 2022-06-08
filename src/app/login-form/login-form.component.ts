import { Component, OnInit } from '@angular/core';
import {Login} from "../classes/Login";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  login : Login
  myForm = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private service : LoginService, private  routeur : Router, private navbar:NavbarComponent) {
    this.login = new Login(1, "", "", false, true, false, "")
  }

  ngOnInit(): void {
  }
  connect(){
    this.service.connect(this.login);
    // A enlever
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/profil')
  }
  invite(){
    this.login.invite=true
    this.login.membre=false
    this.service.addLogin(this.login);
  }
  rediriger(){
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/profil')
  }
  creerCompte(){
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/creerCompte')
  }
}
