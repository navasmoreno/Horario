import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ValenciasService } from 'src/app/services/valencias.service';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'valencias-intento',
  templateUrl: './valencias-intento.component.html',
  styleUrls: ['./valencias-intento.component.scss']
})
export class ValenciasIntentoComponent implements OnInit {
  @Output() isIntentando = new EventEmitter<boolean>();
  @Output() intentoAcabado = new EventEmitter<boolean>();
  intentando: boolean = false;
  respuestas: any[] = [];
  preguntas: any[] = [];
  posicion: number = 0;
  icons = { right: faChevronRight, left: faChevronLeft };
  resultados: any | null = null;

  constructor(private service: ValenciasService, private config: NgbProgressbarConfig) {

    config.height = '30px';
    config.animated = true;
    config.type = 'success';
    this.service.getAllDocs();
  }

  ngOnInit(): void {

  }
  start() {
    this.resetPreguntas();
    this.intentando = true;
    this.posicion = 0;
    this.resultados = null;
    this.isIntentando.emit(true);

  }

  async resetPreguntas() {
    this.preguntas = await this.service.getQuestions();
    this.config.max = this.preguntas.length - 1;
    this.respuestas = [];
  }
  mover(arg0: number) {
    if (this.posicion + arg0 >= 0 && this.posicion + arg0 < this.preguntas.length) {
      this.guardarRespuesta();
      this.posicion += arg0;
      this.ponerRespuesta();
    }
  }
  ponerRespuesta() {
    const checks = document.querySelectorAll("input[type=checkbox][name=valencias]");
    for (var i = 0; i < checks.length; i++) {
      let item = checks.item(i) as HTMLInputElement;
      item.checked = !!this.respuestas[this.posicion] && this.respuestas[this.posicion].includes(item.value);
    }
  }
  guardarRespuesta() {
    this.respuestas[this.posicion] = [];
    const selected = document.querySelectorAll("input[type=checkbox][name=valencias]:checked");

    for (var i = 0; i < selected.length; i++) {
      let item = selected.item(i) as HTMLInputElement;
      this.respuestas[this.posicion].push(item.value);
    }
  }

  submit() {
    this.guardarRespuesta();
    //Comprobar si todas las respuestas tienen datos
    var continuar = this.respuestas.length == this.preguntas.length && this.respuestas.filter(x => x.length == 0).length == 0;
    if (continuar || confirm("Faltan por responder algunos elementos\n¿Desea continuar igualmente?")) {
      this.validarResultados();
    }
  }
  validarResultados() {
    this.resultados = {
      ok: 0, fail: 0,respuestasok:[],respuestasfail:[]
    }
    this.preguntas.forEach((pregunta, i) => {
      if (!this.respuestas[i]) {
        this.resultados.fail++;
        this.resultados.respuestasfail.push([`${pregunta.nombre}(${pregunta.elemento})`,pregunta.valencias.toString(),""])
      } else if (pregunta.valencias.toString() == this.respuestas[i].toString()) {
        this.resultados.ok++;
        this.resultados.respuestasok.push([`${pregunta.nombre}(${pregunta.elemento})`,pregunta.valencias.toString()])
      } else {
        this.resultados.fail++;
        this.resultados.respuestasfail.push([`${pregunta.nombre}(${pregunta.elemento})`,pregunta.valencias.toString(),this.respuestas[i].toString()])
      }
      if (!!this.respuestas[i]) {
        console.log(pregunta.nombre, pregunta.valencias.toString(), this.respuestas[i].toString());
      }
    });
  }
  
  continue() {
    this.intentoAcabado.emit(this.resultados.fail == 0);
    this.intentando = false;
  }

}

