import { Component, OnInit } from '@angular/core';
import { ValenciasService } from 'src/app/services/valencias.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-valencias',
  templateUrl: './valencias.component.html',
  styleUrls: ['./valencias.component.scss'],
})
export class ValenciasComponent implements OnInit {

  selected: string = "quimica_valencias";
  active = 1;
  intentando = false;
  data: any = {
    intentos: 0,
    superados: 0,
    fallados: 0
  };
  valencias: any;


  constructor(public service:ValenciasService) {
    this.data = this.getLocalStorage();
    this.getValencias();
  }
  
  ngOnInit(): void {
  }
  async getValencias(){
    this.valencias = await this.service.getItems();
  }
  getLocalStorage() {
    var data = {
      intentos: 0,
      superados: 0,
      fallados: 0
    }
    var str = localStorage.getItem(environment.valenciaslocalstorage);
    if (str != null) {
      data = JSON.parse(str);
    }
    return data;
  }
  setLocalStorage() {
    localStorage.setItem(environment.valenciaslocalstorage,JSON.stringify(this.data));
  }
  isIntentando(is:boolean){
    this.intentando = is;
  }
  guardarIntento(valid:boolean){
    this.intentando = false;
    this.data.intentos++;
    if(valid)this.data.superados++;
    else this.data.fallados++;
    this.setLocalStorage();
  }
}
