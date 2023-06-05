import { Injectable } from '@angular/core';
import { ServicesBase } from './services-base';
import { FirebaseService } from './firebase.service';
const name = "horarios";

@Injectable({
  providedIn: 'root'
})
export class HorariosService extends ServicesBase{
  constructor(public override firebaseService: FirebaseService) 
  {
    super(firebaseService,name);
  }
}