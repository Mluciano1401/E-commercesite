import UserLog from 'src/app/models/user/userlog.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import User from 'src/app/models/user/user.model';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  url = 'http://localhost:4000/api/auth/';

  constructor(
    private http: HttpClient,
  ) {
    this.http = http;
  }

  postUser(user: User): Observable<unknown> {
    return this.http.post(`${this.url}register`, user);
  }

  loginUser(data: UserLog): Observable<unknown> {
    return this.http.post(`${this.url}login`, data);
  }
}
