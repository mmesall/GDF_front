import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementComponent } from 'src/layouts/etablissement/etablissement.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';
import { AjouterFormationComponent } from 'src/layouts/formations/ajouter-formation/ajouter-formation.component';
import { FormationComponent } from 'src/layouts/formations/formation/formation.component';
import { ModifierFormationComponent } from 'src/layouts/formations/modifier-formation/modifier-formation.component';
import { NavbarComponent } from 'src/layouts/navbar/navbar.component';

const routes: Routes = [
 { path : "navbar" , component : NavbarComponent },
 { path : "formation" , component : FormationComponent},
 {path : "etablissement", component : EtablissementComponent},
 {path : "ajouter-formation", component : AjouterFormationComponent},
 {path : "modifier-formation/:id", component : ModifierFormationComponent},
 {path : "footer" , component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
