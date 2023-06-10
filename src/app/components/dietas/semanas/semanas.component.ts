import { Component, Input, OnInit } from '@angular/core';
import { DietasService } from 'src/app/services/dietas.service';
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dietasemanas',
  templateUrl: './semanas.component.html',
  styleUrls: ['./semanas.component.scss']
})
export class SemanasComponent implements OnInit {
  _dieta: any | {} = undefined;
  currentItem: any = null;
  _posicion: number;
  faTrash = faTrash;
  faPlus = faPlus;

  @Input() editando: boolean = false;
  @Input() id: string = "";
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
      if (this._dieta && val < this._dieta.semanas.length) {
        this.currentItem = this._dieta.semanas[val];
      }
    }
  }

  constructor(
    public dietaService: DietasService
  ) {
    this._posicion = -1;
    this.id = "";
  }

  ngOnInit(): void {
  }
  // guardarCambio($event: any, type: number = 0) {
  guardarCambio(target: any, key: string, type: number = 0, i: number = 0, j: number = 0) {

    if (!this.editando) return;
    switch (type) {
      case 1:
        this._dieta.semanas[this._posicion][key][i] = target.value;
        break;
      case 2:
        this._dieta.semanas[this._posicion][key][i].repeticiones = target.value;
        break;
      case 3:
        this._dieta.semanas[this._posicion][key][i].platos[j] = target.value;
        break;
      default:
        this._dieta.semanas[this._posicion][key] = target.value;
        break;

    }
    this.dietaService.addCollectionDoc(this.id, this._dieta);
  }

  remove(key: string, i: number, j: number = 0, type: number = 0) {
    if (!this.editando) return;
    switch (type) {
      case 1:
        this._dieta.semanas[this._posicion][key][j].platos.splice(i, 1);
        if(this._dieta.semanas[this._posicion][key][j].platos.length == 0){
          this._dieta.semanas[this._posicion][key].splice(i, 1);
        }
        break;
      default:
        this._dieta.semanas[this._posicion][key].splice(i, 1);
        break;
    }
    this.dietaService.addCollectionDoc(this.id, this._dieta);

  }
  add(arg0: string, type: number = 0, i: number = 0) {
    switch (type) {
      case 1:
        this._dieta.semanas[this._posicion][arg0].push({ repeticiones: 1, platos: [] });
        break;
      case 2:
        this._dieta.semanas[this._posicion][arg0][i].platos.push("");
        break;
      default:
        this._dieta.semanas[this._posicion][arg0].push("");
        break;

    }
  }
}
