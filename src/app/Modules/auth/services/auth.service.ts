import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="http://localhost:4000/api/auth/"
  constructor(
    private http: HttpClient
  ) { }
  postUser(user: User): Observable<any>{
    return this.http.post(`${this.url}register`, user)
  }
  loginUser(data:any): Observable<any>{
    return this.http.post(`${this.url}login`, data)
  }
}
