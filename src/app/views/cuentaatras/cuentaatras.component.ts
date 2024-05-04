import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-cuentaatras',
  templateUrl: './cuentaatras.component.html',
  styleUrls: ['./cuentaatras.component.scss']
})
export class CuentaatrasComponent implements OnInit {
  message = "";
  time = moment();
  arrive = moment("2024-05-29");
  exit = moment("2024-06-06");
  constructor() { }

  ngOnInit(): void {
    if (this.time > this.arrive && this.time < this.exit) {
      this.message = "Disfrutando..."
    } else if (this.time > this.exit) {
      this.message = "Hasta el año que viene"
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
    this.message = this.time.format('DD/MM HH:mm:ss');

  }
}
