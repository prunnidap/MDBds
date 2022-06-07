import { Component, OnInit , Input} from '@angular/core';
import {Annonces} from "../../classes/Annonces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {
  @Input() annonces! : Annonces
  constructor(private  routeur : Router) {
  }

  ngOnInit(): void {
  }
}
