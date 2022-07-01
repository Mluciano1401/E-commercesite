import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  urlAPI="http://localhost:4000/api/purchase/"
  constructor(private http: HttpClient) { }
  processpurchase(data:any):Observable<any>{
    return this.http.post(`${this.urlAPI}`, data)
  }
  gethistory(customer:string):Observable<any>{
    return this.http.get(`${this.urlAPI}${customer}`)
  }
}
