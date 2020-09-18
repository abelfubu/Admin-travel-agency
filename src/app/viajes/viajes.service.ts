import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Viaje } from '../models/Viaje';

@Injectable({ providedIn: 'root' })
export class ViajesService {
  url = 'https://api-coches.herokuapp.com/viajes/';
  viajes = new Subject();
  constructor(private http: HttpClient) {}

  getAll(): void {
    this.http
      .get<Viaje[]>(this.url)
      .subscribe((response) => this.viajes.next(response));
  }

  getOne(id: number): Observable<Viaje> {
    return this.http.get<Viaje>(this.url + id);
  }

  addOne(viaje: Viaje): Observable<Viaje> {
    return this.http.post<Viaje>(this.url, viaje);
  }

  updateOne(viaje: Viaje): Observable<Viaje> {
    return this.http.put<Viaje>(this.url, viaje);
  }
}
