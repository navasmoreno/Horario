import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-cuentaatras',
  templateUrl: './cuentaatras.component.html',
  styleUrls: ['./cuentaatras.component.scss']
})
export class CuentaatrasComponent implements OnInit {
  message1 = "";
  message2 = "";
  message3 = "";
  time = moment();
  arrive = moment("2024-05-29 11:00:00");
  exit = moment("2024-06-06 11:00:00");
  constructor() { }

  ngOnInit(): void {
    if (this.time > this.arrive && this.time < this.exit) {
      this.message1 = "Disfrutando..."
      this.message2 = ""
      this.message3 = ""
    } else if (this.time > this.exit) {
      this.message1 = "Hasta el año que viene"
      this.message2 = ""
      this.message3 = ""
    } else {
      this.time = this.getDateFormat();
      this.setText();
      setInterval(() => {
        this.time.subtract(1, "second");
        this.setText();
      }, 1000)
    }
  }

  getDateFormat() {
    var diff = this.arrive.diff(this.time)
    console.log(diff);
    return moment(diff);
  }
  setText() {
    this.message1 = this.time.format('MM ')+(this.time.format('MM')>"1"?"MESES":"MES");
    this.message2 = this.time.format('DD ')+(this.time.format('DD')>"1"?"DIAS":"DIA");
    this.message3 = this.time.format('HH:mm:ss');

  }
}
