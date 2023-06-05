import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DietasService } from 'src/app/services/dietas.service';

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.scss']
})
export class DietasComponent implements OnInit {

  dieta: any = null;
  selected: string = "dieta";
  id: string = "";
  constructor(
    private route: ActivatedRoute, private router: Router, public dietaService: DietasService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.getDieta(this.id);
  }

  getDieta = async (id: string) => {
    if (this.id != "") {
      this.dietaService.getDoc(this.id).then(data => {
        this.setDieta(data);

      });
    }

  }

  setDieta = (data: any) => {    
    this.dieta = data;
    document.title = `${data.nombre}`;
  }
}
