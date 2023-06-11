import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DietasComponent } from './views/dietas/dietas.component';
import { ValenciasComponent } from './views/valencias/valencias.component';
import { QuimicaComponent } from './views/quimica/quimica.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "horario", component: HorarioComponent },
  { path: "horarios", component: HorariosComponent, title:"Horarios"},
  { path: "horarios/:id", component: HorariosComponent, title:"Horarios" },
  // { path: "dieta", component: DietaComponent, title:"Dieta"},
  { path: "dietas", component: DietasComponent, title:"Dietas"},
  { path: "dietas/:id", component: DietasComponent, title:"Dietas" },
  // { path: "asignaturas", component: AsignanurasComponent, title:"Asinaturas" },
  { path: "asignaturas/quimica", component: QuimicaComponent, title:"Química" },
  // { path: "asignaturas/quimica/ejercicios", component: QuimicaEjerciciosComponent, title:"Química" },
  { path: "asignaturas/quimica/ejercicios/valencias", component: ValenciasComponent, title:"Química" },
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
