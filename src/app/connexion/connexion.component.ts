import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import {Login} from "../classes/Login";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  login! : Login
  constructor(private service:LoginService) { }

  ngOnInit(): void {
  }

}
