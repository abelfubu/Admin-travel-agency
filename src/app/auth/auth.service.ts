import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models';
import { LoaderService } from '../services/loader.service';
import { ViajesUIService } from '../viajes/viajes-ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-coches.herokuapp.com/auth/login';
  constructor(
    private router: Router,
    private http: HttpClient,
    private vui: ViajesUIService,
    private loaderService: LoaderService
  ) {}

  login(credentials: User): Observable<string> {
    this.loaderService.showLoading();
    return this.http.post<string>(this.url, credentials).pipe(
      map((response) => {
        this.saveToken(response);
        this.loaderService.hideLoading();
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
    this.vui.snackBarUI('Hasta la próxima!');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
