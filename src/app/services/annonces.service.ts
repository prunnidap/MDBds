import { Injectable } from '@angular/core';
import {Annonces} from "../classes/Annonces";

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  Array : Annonces[] = []

  constructor() {
  }
  getAnnonces() : Annonces[]{
    this.Array.push(new Annonces(1, "Accident","Créneau du 28/06 annulé", "Sale histoire", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ""))
    this.Array.push(new Annonces(2, "Annulation", "Créneau du 29/06 annulé","Extrait de l'annonce", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","./assets/salle.jpg"))
    this.Array.push(new Annonces(3, "Evènement", "Créneau du 30/06 annulé","Un super extrait", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", ""))
    return this.Array
  }
}
