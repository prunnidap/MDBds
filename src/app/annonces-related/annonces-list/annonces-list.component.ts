import { Component, OnInit } from '@angular/core';
import {AnnoncesService} from "../../services/annonces.service";
import {Annonces} from "../../classes/Annonces";

@Component({
  selector: 'app-annonces-list',
  templateUrl: './annonces-list.component.html',
  styleUrls: ['./annonces-list.component.css']
})
export class AnnoncesListComponent implements OnInit {
  annoncesArray : Annonces[] = []

  constructor(service : AnnoncesService) {
    this.annoncesArray = service.getAnnonces()
  }

  ngOnInit(): void {
  }

}
