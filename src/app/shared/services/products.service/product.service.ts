import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url="http://localhost:4000/api/product/"
  constructor(
    private http: HttpClient
  ) { }
  
}
