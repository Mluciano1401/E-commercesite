import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:any = sessionStorage.getItem("User")
  @Input() iscolorblack:boolean=false;
  constructor(private userService: AuthService) { 
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.user)
  }

}
