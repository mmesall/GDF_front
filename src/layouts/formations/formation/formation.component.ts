import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/model/formation.model';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formations: Formation[] = [];

  constructor(private formationService : FormationService){
  }

  ngOnInit(): void {
    this.chargerFormations();
  }

  chargerFormations(){
    this.formationService.listerFormations().subscribe(form =>{
      console.log(form);
      this.formations = form;
    });
  }

  supprimerFormation(f : Formation){
    let conf = confirm("Etes-vous sur de vouloir supprimer?")
    if(conf)
      this.formationService.supprimerFormation(f.idForm).subscribe(() => {
        console.log("formation supprimée avec succés");
        this.chargerFormations();
  });
}


}
