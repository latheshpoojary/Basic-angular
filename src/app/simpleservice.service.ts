import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { empData } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {
  public url:string="/assets/data/emp.json";
  constructor(private http:HttpClient) { }
  getArray():Observable<empData[]>{
    return this.http.get<empData[]>(this.url);
                    
  }
 
}
