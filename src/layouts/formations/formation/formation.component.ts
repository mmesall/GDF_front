import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation.model';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: Formation[]; 

  constructor() {

    this.formations = [
      {idForm : 1, nomFormation : "CAP Couture", typeFormation : "initiale", duree : "3 mois", admission : "prise en charge", diplomeRequis : "Bac", image : "assets/images/formations/agriculture.png"},
      {idForm : 2, nomFormation : "Bts Industrie", typeFormation : "continue", duree : "3 ans", admission : "concours", diplomeRequis : "Bac", image : "assets/images/formations/formation.jpg"},
      {idForm : 3, nomFormation : "Froid et climatisation", typeFormation : "continue", duree : "2 ans", admission : "concours", diplomeRequis : "Bac", image : "assets/images/formations/bt-electromecanique.jpg"},
      {idForm : 4, nomFormation : "Transformation fruits et legumes", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/cap-restau.jpg"},
      {idForm : 5, nomFormation : "Metier Portuaire", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/CFMPL2.png"},
      {idForm : 6, nomFormation : "Geometre topographe", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/geometreTopographe.jpg"}
     ];
  }

  ngOnInit(): void {
      
  }

 

}
