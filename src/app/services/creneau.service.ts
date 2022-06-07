import { Injectable } from '@angular/core';
import {Creneau} from "../classes/Creneau";
import {Profil} from "../classes/Profil";

@Injectable({
  providedIn: 'root'
})
export class CreneauService {
  Array : Creneau[] = []
  constructor() {
    this.Array.push(new Creneau(1, "Escalade", "/assets/salle.jpg", "Quentin Marchal", "", "Lundi", "18h", "20h", "Gymnase VSup", "Créneau d'escalade de bloc ouvert à tous, chaussons du BDS prêtés", 2, "Magnésie en poudre interdite", []))
  }
  getCreneaux() : Creneau[]{
    return this.Array
  }
  addCreneau(creneau : Creneau) : void{
    creneau.id = this.Array.length + 1
    this.Array.push(creneau)
  }
  reserver(profil : Profil, id : number){
    id=id-1
    console.log(id)
    this.Array[id].participants.push(profil)
  }
}
