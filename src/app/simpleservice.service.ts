import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {

  constructor() { }
  getArray(){
    return [
      {name:"lathesh",age:21,experience:2},
      {name:"swasthik",age:21,experience:3},
      {name:"adarsh",age:22,experience:2},
      {name:"Ranju",age:20,experience:1},
      {name:"suneel",age:23,experience:2}

    ]
  }
}
