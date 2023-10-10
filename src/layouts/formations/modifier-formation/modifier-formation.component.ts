import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/model/formation.model';
import { FormationService } from 'src/app/service/formation.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modifier-formation',
  templateUrl: './modifier-formation.component.html',
  styleUrls: ['./modifier-formation.component.css']
})
export class ModifierFormationComponent implements OnInit {

  currentFormation = new Formation();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private formationService: FormationService){}

  ngOnInit(): void {
    this.formationService.consulterFormation(this.activatedRoute.snapshot.params['id']).subscribe(form => {
      this.currentFormation = form;
    });
  }

  updateFormation(){
    this.formationService.updateFormation(this.currentFormation).subscribe(form => {
      this.router.navigate(['formation']);
    });
  }



}
