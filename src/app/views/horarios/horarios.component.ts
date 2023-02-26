import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {
  name: any;
  horario: any;
  selected: string = "horarios";
  titulo: any;


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
        this.getJSON(environment.horariosRoute + "/isabel.json").subscribe(data => {
          this.horario = data;
          this.titulo = "Isabel";
        });
        break;
      case "c9fd92c735c7609969a0ab48b6dc2fda85a06e135196571c06708222baf5a2e7": //Rodrigo
        this.getJSON(environment.horariosRoute + "/rodrigo.json").subscribe(data => {
          this.horario = data;
          this.titulo = "Rodrigo";
        });
        break;
      default:
        this.getJSON(environment.horariosRoute + "/default.json").subscribe(data => {
          this.horario = data;
        });
        break;

    }

  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }

}
