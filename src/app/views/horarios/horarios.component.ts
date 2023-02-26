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
    var id = this.route.snapshot.paramMap.get('id');
    this.getJSON(`${environment.horariosRoute}/${id}.json`).subscribe(data => {
      this.horario = data.horario;
      this.titulo = data.nombre;
      document.title = `Horario de ${data.nombre}`;
    });
  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }

}
