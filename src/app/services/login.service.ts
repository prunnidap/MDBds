import { Injectable } from '@angular/core';
import {Login} from "../classes/Login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login : Login
  constructor() {
    this.login = new Login(0, "", "", false, false, false, "")
  }
  connect(login : Login) : boolean{
    //Check login
    this.login=login
    return true
  }
  getLogin() : Login{
    return this.login
  }
  addLogin(login : Login) : void{
    this.login=login
  }
  deconnexion() : Login{
    this.login=new Login(0, "", "", false, false, false, "")
    return this.login
  }
}
