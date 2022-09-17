import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HorarioComponent } from './components/horario/horario.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { DietasComponent } from './views/dietas/dietas.component';
import { DietaComponent } from './components/dieta/dieta.component';

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
