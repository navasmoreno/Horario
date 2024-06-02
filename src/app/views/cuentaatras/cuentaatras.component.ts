import { Component, OnInit } from '@angular/core';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-cuentaatras',
  templateUrl: './cuentaatras.component.html',
  styleUrls: ['./cuentaatras.component.scss']
})
export class CuentaatrasComponent implements OnInit {
  message1 = '';
  message2 = '';
  message3 = '';
  now = moment();
  arrive = moment('2024-06-29 11:00:00');
  exit = moment('2024-07-06 11:00:00');
  duration: moment.Duration = moment.duration(this.arrive.diff(this.now));
  interval: NodeJS.Timer | undefined;
  haypermisos: boolean = false;
  audio: HTMLAudioElement = new Audio();
  showplay: boolean=false;
  iconos = { play: faMusic }
  constructor() { }

  ngOnInit(): void {
    this.audio.src = "../../assets/hero.m4a";
    this.audio.load();
    var permisos = localStorage.getItem(environment.permisosCuentaAtras);
    if (permisos != null) {
      this.loadPermisos(parseInt(permisos));
    }

    this.setText();
    this.interval = setInterval(() => {
      this.now.add(1, 'second');
      this.duration.subtract(1, 'second');
      this.run();
    }, 1000)
  }

  run() {
    if (this.now > this.arrive && this.now < this.exit) {
      this.message1 = 'Disfrutando...'
      this.message2 = ''
      this.message3 = ''
      clearInterval(this.interval);
    } else if (this.now > this.exit) {
      this.message1 = 'Hasta el año que viene'
      this.message2 = ''
      this.message3 = ''
      clearInterval(this.interval);
    } else {
      this.setText();
    }
  }
  setText() {
    this.message1 = this.duration.months() > 0 ? `${this.duration.months()} ${(this.duration.months() != 1 ? 'MESES' : 'MES')}` : '';
    this.message2 = this.duration.days() > 0 ? `${this.duration.days()} ${(this.duration.days() != 1 ? 'DIAS' : 'DIA')}` : '';
    this.message3 = `${(this.duration.hours() <= 9 ? '0' : '')}${this.duration.hours()}`;
    this.message3 += `:${(this.duration.minutes() <= 9 ? '0' : '')}${this.duration.minutes()}`;
    this.message3 += `:${(this.duration.seconds() <= 9 ? '0' : '')}${this.duration.seconds()}`;

  }
  permisos(value: number) {
    console.log(value);
    if (value == -1) {
      this.haypermisos = false;
    } else {
      localStorage.setItem(environment.permisosCuentaAtras,value.toString());
      this.loadPermisos(value);
    }
  }
  loadPermisos(permiso: number) {
    this.haypermisos = true;
    console.log(permiso,this.audio.paused);
    if (permiso == 1) {
      this.audio.play().then(()=>{

      }).catch(error=>{
        this.showplay=true;
      });
    } else {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
  playMusic() {
    this.audio.play();
    this.showplay=false;
  }
}
