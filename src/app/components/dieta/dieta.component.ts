import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss']
})
export class DietaComponent implements OnInit {
  currentItem: any = null;
  @Input()
  set dieta(val: any) {
    if (val) {
      console.log(val);
      this._dieta = val;
      if(val.hasOwnProperty("nombre"))document.title = val.nombre;
      // Para las dietas por semanas
      if (val.hasOwnProperty('semanas')) {
        this.array=val.semanas;
      }
      //Para las dietas por días
      if (val.hasOwnProperty('dias')) {
        this.array = val.dias;
      }
      if (this._id != "") {
        this.arrayTo(this.currentSelected);
      }
    }
  }
  _dieta: any | {} = undefined;
  @Input()
  set id(val: string) {
    this._id = val;
    var localStoragecurrent = localStorage.getItem(`${environment.dietaPaginacionlocalstorage}_${this._id}`);
    this.currentSelected = localStoragecurrent != null ? parseInt(localStoragecurrent) : 1;
    if (this._dieta != undefined){
      this.arrayTo(this.currentSelected);
    } 
  }
  _id: string = "";
  array: any = [];
  currentSelected = 0;
  show: any = { min: 0, max: 4 };
  constructor() {
  }

  ngOnInit(): void {
  }

  arrayTo(index: any) {
    console.log("[ARRAYTO]",index,this.array.length,`${environment.dietaPaginacionlocalstorage}_${this._id}`);
    if (index >= 0 && index < this.array.length) {
      this.currentItem = this.array[index];
      this.currentSelected = index;
      localStorage.setItem(`${environment.dietaPaginacionlocalstorage}_${this._id}`, this.currentSelected.toString());
      this.setMiddle();
    }
  }
  setMiddle() {
    if (this.currentSelected < 2) {
      this.show.min = 0;
      this.show.max = 4
    } else if (this.currentSelected > this.array.length - 3) {
      this.show.min = this.array.length - 5;
      this.show.max = this.array.length - 1;
    }
    else {
      this.show.min = this.currentSelected - 2;
      this.show.max = this.currentSelected + 2;
    }
  }
}
