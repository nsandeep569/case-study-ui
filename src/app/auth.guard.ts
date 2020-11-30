/* eslint-disable camelcase */
// Angular imports
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
// 3rd party imports
import jwtDecode, * as jwt_decode from 'jwt-decode';
import { Observable, of } from 'rxjs';



/**
 * Auth Guard Service to validate if a route can be activated
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,  private route: ActivatedRoute) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
      if (sessionStorage.getItem('access_token')) {
        const decodedToken = this.getDecodedAccessToken(sessionStorage.getItem('access_token'));
        if (decodedToken) {          
          return of(true);
        }
      } 
    this.router.navigate(['login']);
    return of(false);
  
}
 
  /**
   * Decode token if its valid or not
   * @param token
   */
  getDecodedAccessToken(token: string): any {
    try {
        console.log(token)
        console.log(jwtDecode(token))
      return jwtDecode(token);
    } catch (Error) {
      return null;
    }
  }
}
