import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss']
})
export class AsignaturasComponent implements OnInit {
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
