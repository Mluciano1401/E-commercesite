import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SellerGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }
  checkCookieSession(): boolean{
    try{
      const token: boolean = this.cookieService.check('tokenseller')
      if(token){
        return true
      }
      else{
        this.router.navigate(['/','auth/login'])
        return false
      }
    }
    catch(err){
      return false
    }
    
  }
  
}
