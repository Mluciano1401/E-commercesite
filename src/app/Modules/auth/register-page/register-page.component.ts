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
  message:string="";
  constructor(private fb: FormBuilder,
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
    
    const USER: User = {
      name: this.userForm.get('name')?.value,
      lastname: this.userForm.get('lastname')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      role: this.userForm.get('role')?.value,
    }
    this.userService.postUser(USER).subscribe((user) => {
      if(user.role=="seller"){
        this.router.navigate(['/home/seller']);
      }
      else{
        this.router.navigate(['/home/buyer']);
      }

    }, error => {
      this.userForm.reset();
    })
  }

}
