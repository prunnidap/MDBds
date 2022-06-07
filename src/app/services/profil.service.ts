import { Injectable } from '@angular/core';
import {Profil} from "../classes/Profil";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  profil! : Profil
  constructor() {
    this.profil = new Profil(1, "Bonavida", "Guillaume", "guillaume.bonavida@utbm.fr", false, "")
  }
  getProfil(id:number)
  {
    // Chercher le profil correspondant à id dans la database
    return this.profil
  }
}
