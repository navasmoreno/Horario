import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  name: any;
  horario: any;
  selected: string = "";
  default: any =
    [
      { time: "0830", values: ["L1", "M1", "X1", "J1", "V1",] },
      { time: "0925", values: ["L2", "M2", "X2", "J2", "V2",] },
      { time: "1020", values: ["R1", "R1", "R1", "R1", "R1",] },
      { time: "1035", values: ["L3", "M3", "X3", "J3", "V3",] },
      { time: "1130", values: ["L5", "M5", "X5", "J5", "V5",] },
      { time: "1225", values: ["R2", "R2", "R2", "R2", "R2",] },
      { time: "1240", values: ["L5", "M5", "X5", "J5", "V5",] },
      { time: "1335", values: ["L6", "M6", "X6", "J6", "V6",] },
    ];

  constructor(
    private route: ActivatedRoute, private router: Router, private http: HttpClient
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
    var id = this.route.snapshot.paramMap.get('id');
    switch (id) {
      case "eb5094069f5e287ad7cfce5fc944f1c6565da2481af83fd5c24568e2481d09e3": //Isabel
        this.getJSON("assets/isabel.json").subscribe(data => {
          console.log(data);
          this.horario = data;
        });
        this.selected = id;
        break;
      case "c9fd92c735c7609969a0ab48b6dc2fda85a06e135196571c06708222baf5a2e7": //Rodrigo
        this.getJSON("assets/rodrigo.json").subscribe(data => {
          console.log(data);
          this.horario = data;

        });
        this.selected = id;
        break;
      default:
        this.horario = this.default;
        this.selected = "default";

    }
    console.log(this.selected, this.horario);
  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }

}
