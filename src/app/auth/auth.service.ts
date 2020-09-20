import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models';
import { ViajesUIService } from '../viajes/viajes-ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-coches.herokuapp.com/auth/login';
  constructor(
    private http: HttpClient,
    private vui: ViajesUIService,
    private router: Router
  ) {}

  login(credentials: User): Observable<string> {
    return this.http.post<string>(this.url, credentials).pipe(
      map((response) => {
        this.saveToken(response);
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('');
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
