import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DietasService } from 'src/app/services/dietas.service';
import { HorariosService } from 'src/app/services/horarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() selected: string = "";
  itemSelected: string;
  horarios: any;
  dietas: any;
  constructor(
    private route: ActivatedRoute, private router: Router, public dietaService: DietasService,private horarioService: HorariosService
  ) {
    this.itemSelected = "";
    // this.dietas = environment.dietas;
    // this.horarios = environment.horarios;
    this.getHeaderItems();
  }
  
  ngOnInit(): void {
    this.itemSelected = this.route.snapshot.paramMap.get('id') ?? "";
    // console.log(this.itemSelected);
  }
  
  getHeaderItems = async() =>{
    this.dietas = await this.dietaService.getHeaderItems();
    this.horarios = await this.horarioService.getHeaderItems();

  }

}
