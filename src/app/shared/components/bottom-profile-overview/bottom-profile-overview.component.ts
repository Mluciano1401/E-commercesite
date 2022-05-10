import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-bottom-profile-overview',
  templateUrl: './bottom-profile-overview.component.html',
  styleUrls: ['./bottom-profile-overview.component.css']
})
export class BottomProfileOverviewComponent implements OnInit {
  user:any;
  constructor(private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {user: any},
    private cookieService: CookieService,
    private matDialogRef: MatDialogRef<BottomProfileOverviewComponent>) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }
  logOut(){
    sessionStorage.removeItem("User");
    this.matDialogRef.close();
    if(this.cookieService.check('tokenseller')){
      this.cookieService.delete('tokenseller','/')
    }
    if(this.cookieService.check('tokenbuyer')){
      this.cookieService.delete('tokenbuyer','/')
    }
    this.router.navigate(["/auth/login"]);
  }
}
