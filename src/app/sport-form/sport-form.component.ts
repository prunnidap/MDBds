import { Component, OnInit } from '@angular/core';
import {Sports} from "../classes/Sports";
import {SportService} from "../services/sport.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sport-form',
  templateUrl: './sport-form.component.html',
  styleUrls: ['./sport-form.component.css']
})
export class SportFormComponent implements OnInit {
  sport : Sports
  constructor(private service : SportService, private  routeur : Router) {
    this.sport=new Sports(0, "", "")
  }

  ngOnInit(): void {
  }
  add()
  {
    this.sport.id=0
    this.service.addSport(this.sport)
    this.routeur.navigateByUrl('/sports')
  }
}
