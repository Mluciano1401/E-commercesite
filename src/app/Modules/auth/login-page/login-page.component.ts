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
  userLogForm!: FormGroup;
  hide:boolean = true;
  hasError!: boolean;
  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: AuthService) { 
    }

  ngOnInit(): void {
    this.form();
  }
  private form(): void{
    this.userLogForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  submit(): void{
    this.hasError = false;
    const login = {
      username: this.userLogForm.get('username')?.value,
      password: this.userLogForm.get('password')?.value
    }
    this.userService.loginUser(login).subscribe((user) => {
      if(user.dataUser.role=="seller"){
        this.router.navigate(['/home/seller'],);
      }
      else{
        this.router.navigate(['/home/buyer'],);
      }
      this.getdata(user.dataUser);
      sessionStorage.setItem('User',JSON.stringify(user.dataUser));
    },  error => {
      this.hasError = true;
      this.userLogForm.reset();
    })
  }
  getdata(user:any){
    this.userService.getdatauser(user)
  }
}
