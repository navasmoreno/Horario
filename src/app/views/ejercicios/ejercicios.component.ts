import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {
  selected = "asignaturas";
  asignatura: string="";
  constructor(
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit(): void {
    this.asignatura = this.route.snapshot.paramMap.get('asignatura') || "";

  }

}
