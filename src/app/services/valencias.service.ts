import { Injectable } from '@angular/core';
import { ServicesBase } from './services-base';
import { FirebaseService } from './firebase.service';
const name = "valencias";

@Injectable({
  providedIn: 'root'
})
export class ValenciasService extends ServicesBase {
  constructor(public override firebaseService: FirebaseService) 
  {
    super(firebaseService,name);
  }

  async getQuestions() {

    var questions: any = [];
    if (this.querySnapshot == null) {
        await this.getAllDocs();
    }
    if (this.querySnapshot != null) {
        var cuantas = Math.floor(this.querySnapshot.size/10)*5;
        var numeros: number[] = [];
        for (let index = 0; index < cuantas; index++) {
          var pos;
          do{
            pos = Math.floor(Math.random() * this.querySnapshot.size);
          } while(numeros.includes(pos))
          const item = this.querySnapshot.docs[pos];
          numeros.push(pos);
          questions.push(item.data());
        }
        console.log(questions);

    }
    return questions;
  }
}
