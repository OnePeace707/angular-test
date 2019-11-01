import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }

  items=[];

  addNewDog(dog){
    this.items.push(dog);
  }

  getDogs(){
    return this.items;
  }

}