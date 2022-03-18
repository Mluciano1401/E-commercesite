import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private aRouter: ActivatedRoute) { 
      this.userLogForm = this.fb.group({
        name: ['', Validators.required],
        password: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }
  submit(): void{

    console.log(this.userLogForm.value)
  }
}
