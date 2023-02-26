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
    this.getJSON(`${environment.horariosRoute}/${id}.json`).subscribe(data => {
      this.horario = data;
      this.titulo = id;
    });
  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }

}
