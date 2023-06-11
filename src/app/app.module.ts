import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorarioComponent } from './components/horario/horario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './views/home/home.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DietaComponent } from './components/dieta/dieta.component';
import { DietasComponent } from './views/dietas/dietas.component';
import { SemanasComponent } from './components/dietas/semanas/semanas.component';
import { DiasComponent } from './components/dietas/dias/dias.component';
import { DietasService } from './services/dietas.service';
import { HorariosService } from './services/horarios.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AsignaturasComponent } from './views/asignaturas/asignaturas.component';
import { EjerciciosComponent } from './views/ejercicios/ejercicios.component';
import { ValenciasComponent } from './views/valencias/valencias.component';
import { ValenciasIntentoComponent } from './components/valencias-intento/valencias-intento.component';

@NgModule({
  declarations: [
    AppComponent,
    HorarioComponent,
    HomeComponent,
    HorariosComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DietaComponent,
    DietasComponent,
    SemanasComponent,
    DiasComponent,
    AsignaturasComponent,
    EjerciciosComponent,
    ValenciasComponent,
    ValenciasIntentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [DietasService,HorariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
