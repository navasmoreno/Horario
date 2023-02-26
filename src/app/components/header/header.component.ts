import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selected: string = "";
  itemSelected: string;
  horarios: { nombre: string; link: string; }[];
  dietas: { nombre: string; link: string; }[];
  constructor(
    private route: ActivatedRoute, private router: Router, private http: HttpClient
  ) { 
    this.itemSelected="";
    this.horarios = environment.horarios;
    this.dietas=environment.dietas;
  }

  ngOnInit(): void {
    this.itemSelected = this.route.snapshot.paramMap.get('id') ?? "";
    console.log(this.itemSelected);
  }

}
