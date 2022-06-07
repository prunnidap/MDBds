import { Component, OnInit } from '@angular/core';
import {Profil} from "../classes/Profil";
import {ProfilService} from "../services/profil.service";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profil! : Profil
  constructor(private service : ProfilService, private navbar : NavbarComponent) {
    this.profil = service.getProfil(navbar.login.id)
  }

  ngOnInit(): void {
  }

}
