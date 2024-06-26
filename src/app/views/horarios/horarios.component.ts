import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HorariosService } from 'src/app/services/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  horario: any;
  selected: string = "horarios";
  titulo: any;

  constructor(
    private route: ActivatedRoute, private router: Router, public horarioService: HorariosService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void 
  {
    var id = this.route.snapshot.paramMap.get('id') || "";
    this.getHorario(id);
  }
  getHorario = async (id: string) => {
    if (id != "") {
      this.horarioService.getDoc(id).then(data => {
        this.setHorario(data);

      });
    }

  }

  setHorario = (data: any) => {
    this.horario = data.horario;
    this.titulo = data.nombre;
    document.title = `Horario de ${data.nombre}`;
  }




}


