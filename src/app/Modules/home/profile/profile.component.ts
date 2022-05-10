import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = sessionStorage.getItem("User")
  isedit:boolean = false;
  constructor( private router: Router,) { }

  ngOnInit(): void {
    this.user = JSON.parse(this.user)
  }
  editable(){
    this.isedit = true
  }
  cancel(){
    this.isedit= false
  }
  save(){

  }
  return(){
    this.router.navigate([`/home/buyer`]);
  }
}
