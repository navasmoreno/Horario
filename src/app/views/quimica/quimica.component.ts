import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quimica',
  templateUrl: './quimica.component.html',
  styleUrls: ['./quimica.component.scss']
})
export class QuimicaComponent implements OnInit {
  selected = "quimica";
  constructor() { }

  ngOnInit(): void {
  }

}
