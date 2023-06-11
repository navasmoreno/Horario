import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DietasComponent } from './views/dietas/dietas.component';
import { ValenciasComponent } from './views/valencias/valencias.component';
import { EjerciciosComponent } from './views/ejercicios/ejercicios.component';
import { AsignaturasComponent } from './views/asignaturas/asignaturas.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "horarios", component: HorariosComponent, title:"Horarios"},
  { path: "horarios/:id", component: HorariosComponent, title:"Horarios" },
  { path: "dietas", component: DietasComponent, title:"Dietas"},
  { path: "dietas/:id", component: DietasComponent, title:"Dietas" },
  { path: "asignaturas/:asignatura", component: AsignaturasComponent, title:"Asignatura" },
  { path: ":asignatura/ejercicios", component: EjerciciosComponent, title:"Ejercicios" },
  { path: "quimica/ejercicios/valencias", component: ValenciasComponent, title:"Química" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
