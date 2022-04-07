import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:4000/api/category/"
  constructor(
    private http: HttpClient
  ) { }
}
