import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  isedit:boolean = false;
  constructor( 
    private router: Router,
    private localStorageService:StorageService
    ) { }

  ngOnInit(): void {
    this.user = this.localStorageService.getItem("User");
  }
  editable(){
    this.isedit = true
  }
  cancel(){
    this.isedit= false
  }
  save(){

  }
}
