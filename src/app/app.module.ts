import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CidadeService } from './cidade.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.router';

import { AppComponent } from './app.component';
import { CidadesComponent } from './cidades/cidades.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';


@NgModule({
  declarations: [
    AppComponent,
    CidadesComponent,
    DisciplinasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [CidadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
