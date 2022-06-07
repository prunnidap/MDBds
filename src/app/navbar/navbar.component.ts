import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Login} from "../classes/Login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login : Login
  constructor(private service : LoginService) {
    this.login=service.getLogin()
  }

  ngOnInit(): void {
  }
  actualiseLogin(): void{
    this.login=this.service.getLogin()
  }
  deconnexion(){
    this.login = this.service.deconnexion()
  }
}
