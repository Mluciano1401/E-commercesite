import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  urlAPI = 'http://localhost:4000/api/product/';

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  getproducts(): Observable<any> {
    return this.http.get(`${this.urlAPI}`);
  }

  getproduct(id: string): Observable<any> {
    return this.http.get(`${this.urlAPI}${id}`);
  }

  getproductsbysupplier(data: string): Observable<any> {
    return this.http.get(`${this.urlAPI}supplier/${data}`);
  }

  getproductsbycategory(data: string): Observable<any> {
    return this.http.get(`${this.urlAPI}category/${data}`);
  }

  updateproduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this.urlAPI}${id}`, data);
  }

  createproduct(data: any): Observable<any> {
    return this.http.post(`${this.urlAPI}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.urlAPI}${id}`);
  }
}
