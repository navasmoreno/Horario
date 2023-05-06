import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietasemanas',
  templateUrl: './semanas.component.html',
  styleUrls: ['./semanas.component.scss']
})
export class SemanasComponent implements OnInit {
  _dieta: any | {} = undefined;
  currentItem: any = null;

  @Input()
  set dieta(val: any) {
    if (val) {
      this._dieta = val;
    }
  }
  @Input()
  set posicion(val: number) {
    if (val) {
      if(this._dieta && val<this._dieta.semanas.length){
        this.currentItem = this._dieta.semanas[val];
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
