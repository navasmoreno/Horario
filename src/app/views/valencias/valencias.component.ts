import { Component, OnInit } from '@angular/core';
import { ElementosquimicosService } from 'src/app/services/elementosquimicos.service';
import { environment } from 'src/environments/environment.prod';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  elementos: any;
  elementosTabla: any;
  iconos = { buscar: faSearch }

  constructor(public service: ElementosquimicosService) {
    this.data = this.getLocalStorage();
    this.getElementosQuimicos();
  }

  ngOnInit(): void {
  }
  async getElementosQuimicos() {
    this.elementos = await this.service.getItems();
    this.filter();
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
    localStorage.setItem(environment.valenciaslocalstorage, JSON.stringify(this.data));
  }
  isIntentando(is: boolean) {
    this.intentando = is;
  }
  guardarIntento(valid: boolean) {
    this.intentando = false;
    this.data.intentos++;
    if (valid) this.data.superados++;
    else this.data.fallados++;
    this.setLocalStorage();
  }
  onSearch() {
    var searchText = (document.getElementById("table-filtering-search") as HTMLInputElement).value;
    this.filter(searchText);;
    return;
  }
  filter(text: string = "") {
    text = text.toLowerCase().trim();
    this.elementosTabla = this.elementos.filter((item: any) =>
      text == ""
      || item.nombre.toLowerCase().includes(text)
      || item.elemento.toLowerCase().includes(text)
      || item.valencias.includes(parseInt(text))
    );
  }
}
