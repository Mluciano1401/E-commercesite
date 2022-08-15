import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import StorageService from 'src/app/core/local-storage.service';

@Component({
  selector: 'app-bottom-profile-overview',
  templateUrl: './bottom-profile-overview.component.html',
  styleUrls: ['./bottom-profile-overview.component.css'],
})
export default class BottomProfileOverviewComponent implements OnInit {
  user: any;

  constructor(
private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: {user: any},
    private cookieService: CookieService,
    private storageService: StorageService,
    private matDialogRef: MatDialogRef<BottomProfileOverviewComponent>,
  ) {
    this.router = router;
    this.data = data;
    this.cookieService = cookieService;
    this.storageService = storageService;
    this.matDialogRef = matDialogRef;
  }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  logOut() {
    this.storageService.removeItem('User');
    this.matDialogRef.close();
    if (this.cookieService.check('tokenseller')) {
      this.cookieService.delete('tokenseller', '/');
    }
    if (this.cookieService.check('tokenbuyer')) {
      this.cookieService.delete('tokenbuyer', '/');
    }
    this.router.navigate(['/auth/login']);
  }
}
