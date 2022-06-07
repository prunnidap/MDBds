import { Component, OnInit, Input } from '@angular/core';
import {Login} from "../../classes/Login";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {NavbarComponent} from "../../navbar/navbar.component";

@Component({
  selector: 'app-respoform',
  templateUrl: './respoform.component.html',
  styleUrls: ['./respoform.component.css']
})
export class RespoformComponent implements OnInit {
  login : Login
  constructor(private service : LoginService, private  routeur : Router, private navbar:NavbarComponent) {
    this.login = new Login(1, "", "", true, false, false, "")
  }

  ngOnInit(): void {
  }
  submit(){
    this.service.addLogin(this.login);
  }
  rediriger(){
    this.navbar.actualiseLogin()
    this.routeur.navigateByUrl('/pagemembre')
  }
}
