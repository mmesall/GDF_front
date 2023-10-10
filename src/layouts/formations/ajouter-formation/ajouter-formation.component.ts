import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Formation } from 'src/app/model/formation.model';
import { FormationService } from 'src/app/service/formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {

   newFormation = new Formation();
   message : string | undefined;

   constructor(private formationService : FormationService,
                private router:   Router){ }

   ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

   addFormation(){
    // console.log(this.newFormation);
    this.formationService.ajouterFormation(this.newFormation)
    .subscribe(from => {
      console.log(from);
      this.router.navigate(['formation']);
    });
    this.message = "La formation " + this.newFormation.nomFormation + " a été bien ajoutée !";
   }   

   
}
