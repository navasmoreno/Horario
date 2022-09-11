import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HorarioComponent } from './components/horario/horario.component';
import { HorariosComponent } from './views/horarios/horarios.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "", component: AppComponent },
  { path: "horario", component: HorarioComponent },
  { path: "horarios/:id", component: HorariosComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
