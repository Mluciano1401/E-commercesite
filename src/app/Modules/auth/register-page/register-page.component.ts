import { CookieService } from 'ngx-cookie-service';
import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ConfirmedValidator } from './validator/confirmed.validator';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../auth.css']
})
export class RegisterPageComponent implements OnInit {
  userForm!: FormGroup;
  hide:boolean = true;
  hide2:boolean = true;  
  hasError: boolean = false;
  error:string=""
  constructor(
    private cookie:CookieService,
    private fb: FormBuilder,
    private router: Router,
    private userService: AuthService) {}

  ngOnInit(): void {
   this.formBuilder();
  }
  private formBuilder(): void{
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(22)
      ]],
      confirmpassword: ['',[
        Validators.required,
      ]],
      role: ['', Validators.required],
    }, {
      validator: ConfirmedValidator('password', 'confirmpassword'),
      
  })
  }
  submit(): void{
    this.hasError = false;
    const USER: User = {
      name: this.userForm.get('name')?.value,
      lastname: this.userForm.get('lastname')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      role: this.userForm.get('role')?.value,
      money: 0,
    }
    this.userService.postUser(USER).subscribe((user) => {
      const tokenSession = user.dataUser.accessToken
      if(user.dataUser.role=="seller"){
        this.cookie.set('tokenseller', tokenSession, 1, '/')
        this.router.navigate(['/home/seller'],);
      }
      else{
        this.cookie.set('tokenbuyer', tokenSession, 1, '/')
        this.router.navigate(['/home/buyer'],);
      }
      sessionStorage.setItem('User',JSON.stringify(user.dataUser));
    }, error => {
      this.hasError = true;
      this.error = error.error;
      this.userForm.reset();
    })
  }

}
