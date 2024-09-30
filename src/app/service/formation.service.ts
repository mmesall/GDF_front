import { Injectable } from '@angular/core';
import { Formation } from '../model/formation.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class FormationService {


  apiUrl: string = 'http://localhost:8080/gdf/formations';
  formations: any;

  constructor(private http: HttpClient){}


  listeFormations(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response._embedded.formations)
    );
  }

  

  ajouterFormation( newFormation: any):Observable<any>{
    return this.http.post<any>(this.apiUrl, newFormation, httpOptions)
  }


  

  // supprimerFormation(id : number){
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url, httpOptions);
  // }

  // consulterFormation(id: number): Observable<Formation>{
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.get<Formation>(url); 
  // }

  // updateFormation(form: Formation): Observable<Formation>{
  //   return this.http.put<Formation>(this.apiUrl, form, httpOptions);
  // }



}
