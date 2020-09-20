import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const isAuth = this.authService.isLoggedIn();
    if (!isAuth) {
      this.router.navigate(['']);
    }
    return isAuth;
  }
}
