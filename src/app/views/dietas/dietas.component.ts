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
  dieta: any;
  selected: string = "dieta";
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
      case "dieta1":
        this.getJSON(environment.dietasRoute + "/dieta1.json").subscribe(data => {
          this.dieta = data;
        });
        break;
      default:
        this.getJSON(environment.dietasRoute + "/default.json").subscribe(data => {
          this.dieta = data;
        });
        break;

    }

  }
  public getJSON(_jsonURL: string): Observable<any> {
    return this.http.get(_jsonURL);
  }
}
