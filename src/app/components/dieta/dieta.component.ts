import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.component.html',
  styleUrls: ['./dieta.component.scss']
})
export class DietaComponent implements OnInit {
  currentSemana: any = null;
  @Input()
  set dieta(val: any) {
    if (val) {
      this.size = val.semanas.length * 10;
      this._dieta = val;
      this.semanaTo(this.current);
    }
  }
  _dieta: any | {} = undefined;
  current = 0;
  size = 10;
  show :any = {min:0,max:5};
  constructor() {
    var localStoragecurrent = localStorage.getItem(environment.dietaPaginacionlocalstorage);
    this.current = localStoragecurrent != null ? parseInt(localStoragecurrent) : 1;
  }

  ngOnInit(): void {
  }

  semanaTo(index: any) {
    if (index >= 0 && index < this._dieta.semanas.length) {
      this.currentSemana = this._dieta.semanas[index];
      this.current = index;
      localStorage.setItem(environment.dietaPaginacionlocalstorage,this.current.toString());
      this.setMiddle();
    }
  }
  setMiddle(){
    if(this.current<2) {
      this.show.min=0;
      this.show.max=4
    } else if(this.current>this._dieta.semanas.length-3) {
      this.show.min=this._dieta.semanas.length-6;
      this.show.max=this._dieta.semanas.length-1;
    }
    else {
      this.show.min=this.current-2;
      this.show.max=this.current+2;
    }
    console.log(this.show.min,this.show.max,this.current,this._dieta.semanas.length);
  }
}
