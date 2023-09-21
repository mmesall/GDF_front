import { AjouterFormationComponent } from './../layouts/formations/ajouter-formation/ajouter-formation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { FormationComponent } from 'src/layouts/formations/formation/formation.component';
import { FooterComponent } from 'src/layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    AjouterFormationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
