import { Component, Input, OnInit } from '@angular/core';
import { DietasService } from 'src/app/services/dietas.service';

@Component({
  selector: 'app-dietadias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent implements OnInit {
  _dieta: any | {} = undefined;
  currentItem: any = null;
  _posicion: number;
  _id: string;
  @Input()
  set dietaid(val: any) {
    if (val) {
      this._id = val;
    }
  }
  @Input()
  set dieta(val: any) {
    if (val) {
      this._dieta = val;
    }
  }
  @Input()
  set posicion(val: number) {
    if (val != null) {
      this._posicion = val;
      if (this._dieta && val < this._dieta.dias.length) {
        this.currentItem = this._dieta.dias[val];
      }
    }
  }
  constructor(public dietaService: DietasService) {
    this._posicion = 0;
    this._id = "";
  }

  ngOnInit(): void {
  }

  add(arg0: string, type: number = 0) {
    switch (type) {
      case 1:
        this._dieta.dias[this._posicion][arg0].push("");
        break;
      default:
        this._dieta[arg0].push("");
        break;

    }
  }
  remove($event: any, type: number = 0) {
    var keys = $event.target.dataset.keys.split('_');
    switch (type) {
      case 1:
        this._dieta.dias[this._posicion][keys[0]].splice(keys[1], 1);
        break;
      default:
        this._dieta[keys[0]].splice(keys[1], 1);
        break;
    }
    this.dietaService.addCollectionDoc(this._id, this._dieta);
  }
  guardarCambio($event: any, type: number = 0) {
    var keys = $event.target.id.split('_');
    switch (type) {
      case 1:
        this._dieta.dias[this._posicion][keys[0]][keys[1]] = $event.target.value;
        break;
      default:
        this._dieta[keys[0]][keys[1]] = $event.target.value;
        break;

    }
    this.dietaService.addCollectionDoc(this._id, this._dieta);
  }
  guardarCambio2($event: any) {
  }
}
