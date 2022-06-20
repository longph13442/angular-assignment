import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanToAdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const login = JSON.parse(localStorage.getItem('longin')!);
   if(login){
    if(login.Users.role ===1){
      return true;
    }else{
      this.router.navigateByUrl("/")
      return true;
    }
    
   }
      
    this.router.navigateByUrl("/signin")
    return false;

  }

}
