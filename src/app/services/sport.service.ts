import { Injectable } from '@angular/core';
import {Annonces} from "../classes/Annonces";
import {Sports} from "../classes/Sports";

@Injectable({
  providedIn: 'root'
})
export class SportService {
  Array : Sports[] = []

  constructor() {
    this.Array.push(new Sports(1, "Escalade", "./assets/salle.jpg"))
  }
  getSports() : Sports[]{
    return this.Array
  }
  addSport(sport : Sports) : void{
    this.Array.push(sport)
  }
}
