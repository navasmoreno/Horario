import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dietadias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent implements OnInit {
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
      if(this._dieta && val<this._dieta.dias.length){
        this.currentItem = this._dieta.dias[val];
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
