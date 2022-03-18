import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../auth.css']
})
export class RegisterPageComponent implements OnInit {
  userForm:FormGroup;
  hide:boolean = true;
  hide2:boolean = true;
  constructor(private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute) { 
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(22)
        ]],
        confirmpassword: ['', [
          Validators.required, 
          Validators.requiredTrue
        ]],
        role: ['', Validators.required],
      })
    }
  ngOnInit(): void {
    
  }
  submit(): void{

    console.log(this.userForm.value)
  }

}
