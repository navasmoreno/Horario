import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

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
    private route: ActivatedRoute, private router: Router, public firebase: FirebaseService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? "";
    this.getDieta(this.id);
  }

  getDieta = async (id: string) => {
    if (this.id != "") {
      this.firebase.getDoc(this.selected, this.id).then(data => {
        console.log(data);
        this.setDieta(data);

      });
    }

  }

  setDieta = (data: any) => {    
    this.dieta = data;
    document.title = `${data.nombre}`;
  }
}
