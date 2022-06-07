import { Component, OnInit } from '@angular/core';
import {Login} from "../../classes/Login";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-pagemembre',
  templateUrl: './pagemembre.component.html',
  styleUrls: ['./pagemembre.component.css']
})
export class PagemembreComponent implements OnInit {
  login : Login
  constructor(service : LoginService) {
    this.login = service.getLogin()
  }

  ngOnInit(): void {
  }

}
