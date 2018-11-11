import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerie-films',
  templateUrl: './galerie-films.component.html',
  styleUrls: ['./galerie-films.component.css']
})
export class GalerieFilmsComponent implements OnInit {

  showMovies = true;
  constructor() { }

  ngOnInit() {
  }

}
