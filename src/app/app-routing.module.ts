import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DietasComponent } from './views/dietas/dietas.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "horario", component: HorarioComponent },
  { path: "horarios", component: HorariosComponent, title:"Horarios"},
  { path: "horarios/:id", component: HorariosComponent, title:"Horarios" },
  // { path: "dieta", component: DietaComponent, title:"Dieta"},
  { path: "dietas", component: DietasComponent, title:"Dietas"},
  { path: "dietas/:id", component: DietasComponent, title:"Dietas" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
