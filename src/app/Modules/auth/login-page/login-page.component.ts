import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import dataUser from '../../../models/user/datauser.model';

import AuthService from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../auth.css'],
})
export default class LoginPageComponent implements OnInit {
  userLogForm!: FormGroup;

  hide = true;

  hasError = false;

  error = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService,
    private userService: AuthService,
  ) {
    this.fb = fb;
    this.router = router;
    this.cookie = cookie;
    this.userService = userService;
  }

  ngOnInit(): void {
    this.form();
  }

  private form(): void {
    this.userLogForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(): void {
    this.hasError = false;
    const login = {
      username: this.userLogForm.get('username')?.value,
      password: this.userLogForm.get('password')?.value,
    };
    this.userService.loginUser(login).subscribe((user: any) => {
      const tokenSession = user.dataUser.accessToken;
      if (user.dataUser.role === 'seller') {
        this.cookie.set('tokenseller', tokenSession, 2, '/');
        this.router.navigate(['/home/seller']);
      } else {
        this.cookie.set('tokenbuyer', tokenSession, 1, '/');
        this.router.navigate(['/home/buyer']);
      }
      sessionStorage.setItem('User', JSON.stringify(user.dataUser));
    }, (error: HttpErrorResponse) => {
      this.hasError = true;
      this.error = error.error.message;
      this.userLogForm.reset();
    });
  }
}
