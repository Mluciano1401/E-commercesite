import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../auth.css']
})
export class LoginPageComponent implements OnInit {
  userLogForm:FormGroup;
  hide:boolean = true;
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: AuthService) { 
      this.userLogForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }
  submit(): void{
    const login = {
      username: this.userLogForm.get('username')?.value,
      password: this.userLogForm.get('password')?.value
    }
    this.userService.loginUser(login).subscribe((user) => {
      if(user.role=="seller"){
        this.router.navigate(['/home/seller']);
      }
      else{
        this.router.navigate(['/home/buyer']);
      }
    },  error => {
      console.log(error);
      this.userLogForm.reset();
    })
    console.log(this.userLogForm.value)
  }
}
