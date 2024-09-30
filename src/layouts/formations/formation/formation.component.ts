import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation.model';
import { CommonModule } from '@angular/common';
import { FormationService } from 'src/app/service/formation.service';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  apiUrl: string = 'http://localhost:8080/gdf/formations';
  formations : any[] = [];

  // formations: Formation[] = [];

  constructor(private http: HttpClient, private formationService : FormationService){
  }

  ngOnInit(): void {
    this.chargerFormations();
  }

  chargerFormations(){
    this.formationService.listeFormations().subscribe(data =>{
      console.log(data);
      this.formations = data;
    });
  }

  
//   supprimerFormation(f : Formation){
//     let conf = confirm("Etes-vous sur de vouloir supprimer?")
//     if(conf)
//       this.formationService.supprimerFormation(f.idForm).subscribe(() => {
//         console.log("formation supprimée avec succés");
//         this.chargerFormations();
//   });
// }


}
