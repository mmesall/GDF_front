import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  apiUrl: string = 'http://localhost:8080/gdf/api';

  formations: Formation[] = [];

  // formation!: Formation;

  constructor(private http: HttpClient) { 
    /*this.formations = [
      {idForm : 1, nomFormation : "CAP Couture", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bac", image : "assets/images/formations/agriculture.png"},
      {idForm : 2, nomFormation : "Bts Industrie", typeFormation : "continue", duree : "3 ans", admission : "concours", diplomeRequis : "Bac", image : "assets/images/formations/formation.jpg"},
      {idForm : 3, nomFormation : "Froid et climatisation", typeFormation : "continue", duree : "2 ans", admission : "concours", diplomeRequis : "Bac", image : "assets/images/formations/bt-electromecanique.jpg"},
      {idForm : 4, nomFormation : "Transformation fruits et légumes", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/cap-restau.jpg"},
      {idForm : 5, nomFormation : "Métier Portuaire", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/CFMPL2.png"},
      {idForm : 6, nomFormation : "Geométre topographe", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/geometreTopographe.jpg"},
      {idForm : 7, nomFormation : "Geométre topographe", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/geometreTopographe.jpg"},
      {idForm : 8, nomFormation : "Geométre topographe", typeFormation : "initiale", duree : "6 mois", admission : "prise en charge", diplomeRequis : "Bfem", image : "assets/images/formations/geometreTopographe.jpg"}
     ];*/
  }

  listerFormations(): Observable<Formation[]>{
    return this.http.get<Formation[]>(this.apiUrl);
  }

  // ajouterFormation(formation : Formation){
  //   this.formations.push(formation);
  // }

  ajouterFormation( form: Formation):Observable<Formation>{
    return this.http.post<Formation>(this.apiUrl, form, httpOptions);
  }

  supprimerFormation(id : number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterFormation(id: number): Observable<Formation>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Formation>(url); 
  }

  updateFormation(form: Formation): Observable<Formation>{
    return this.http.put<Formation>(this.apiUrl, form, httpOptions);
  }



}
