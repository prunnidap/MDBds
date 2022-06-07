import { Component, OnInit } from '@angular/core';
import {Login} from "../../classes/Login";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-pagerespo',
  templateUrl: './pagerespo.component.html',
  styleUrls: ['./pagerespo.component.css']
})
export class PagerespoComponent implements OnInit {
  login : Login
  constructor(service : LoginService) {
    this.login = service.getLogin()
  }

  ngOnInit(): void {
  }

}
