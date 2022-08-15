import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export default class SellerGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {
    this.cookieService = cookieService;
    this.router = router;
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try {
      const token: boolean = this.cookieService.check('tokenseller');
      if (token) {
        return true;
      }

      this.router.navigate(['/', 'auth/login']);
      return false;
    } catch (err) {
      return false;
    }
  }
}
