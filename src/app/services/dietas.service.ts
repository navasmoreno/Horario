import { Injectable } from '@angular/core';
import { ServicesBase } from './services-base';
import { FirebaseService } from './firebase.service';
const name = "dieta";

@Injectable({
  providedIn: 'root'
})
export class DietasService extends ServicesBase{
  constructor(public override firebaseService: FirebaseService) 
  {
    super(firebaseService,name);
  }
}
