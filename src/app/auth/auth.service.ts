import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api-coches.herokuapp.com/auth/login';
  constructor(private http: HttpClient) {}

  login(credentials: User): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.url, credentials);
  }
}
