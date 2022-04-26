import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserSellerService {
  urlAPI="http://localhost:4000/api/user/"
  seller:any;
  constructor(
    private http: HttpClient
  ) { }
  getSellers(): Observable<any>{
    return this.http.get(`${this.urlAPI}`)
  }
  getSellerbyAPI(id:string){
    return this.http.get(`${this.urlAPI}${id}`)
  }
  updateuser(id:String, data:any): Observable<any>{
    return this.http.put(`${this.urlAPI}${id}`, data)
  }
}
