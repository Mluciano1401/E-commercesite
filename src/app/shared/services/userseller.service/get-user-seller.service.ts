import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class GetUserSellerService {
  urlAPI = 'http://localhost:4000/api/user/';

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  getSellers(): Observable<any> {
    return this.http.get(`${this.urlAPI}`);
  }

  getSellerbyAPI(id: string): Observable<any> {
    return this.http.get(`${this.urlAPI}${id}`);
  }

  getuserbyusername(username: string): Observable<any> {
    return this.http.get(`${this.urlAPI}username/${username}`);
  }

  updateuser(id: string, data: any): Observable<any> {
    return this.http.put(`${this.urlAPI}${id}`, data);
  }

  updatemoney(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.urlAPI}money/${id}`, data);
  }
}
