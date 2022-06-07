import { Component, OnInit } from '@angular/core';
import {Login} from "../../classes/Login";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../../navbar/navbar.component";

@Component({
  selector: 'app-membreform',
  templateUrl: './membreform.component.html',
  styleUrls: ['./membreform.component.css']
})
export class MembreformComponent implements OnInit {
  login : Login

  constructor(private service : LoginService, private  routeur : Router, private navbar:NavbarComponent) {
      this.login = new Login(1, "", "", false, true, false, "")
  }

  ngOnInit(): void {
  }
  submit(){
    this.service.addLogin(this.login);
    // A enlever
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/pagemembre')
  }
  invite(){
    this.login.invite=true
    this.login.membre=false
    this.service.addLogin(this.login);
  }
  rediriger(){
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/pagemembre')
  }
}
