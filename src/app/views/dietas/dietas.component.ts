import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.scss']
})
export class DietasComponent implements OnInit {

  name: any;
  dieta: any = null;
  selected: string = "dieta";
  id: string = "";
  constructor(
    private route: ActivatedRoute, private router: Router, private http: HttpClient
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.getJSON(`${environment.dietasRoute}/${this.id}.json`).subscribe(
      data => {
        this.dieta = data;
      },
      error => {
        console.log(this.dieta,error);
      }
    );
  }

  ngOnInit(): void {
  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }
}
