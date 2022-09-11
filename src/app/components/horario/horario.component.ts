import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {
  @Input() horario:any | {};

  constructor() { }

  ngOnInit(): void {
    // console.log(this.horario);
  }

}
