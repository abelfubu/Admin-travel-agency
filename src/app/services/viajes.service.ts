import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Viaje } from '../models/Viaje';

interface ServerResponse {
  success: boolean;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class ViajesService {
  url = 'https://api-coches.herokuapp.com/viajes/';
  viajes = new Subject();
  constructor(private http: HttpClient) {}

  getAll(): void {
    this.http
      .get<Viaje[]>(this.url)
      .pipe(pluck('viajes'))
      .subscribe((response) => this.viajes.next(response));
  }

  getOne(id: number): Observable<Viaje[]> {
    return this.http.get<Viaje[]>(this.url + id).pipe(pluck('result'));
  }

  addOne(viaje: Viaje): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(this.url, viaje);
  }

  updateOne(viaje: Viaje): Observable<ServerResponse> {
    return this.http.put<ServerResponse>(this.url, viaje);
  }
}
