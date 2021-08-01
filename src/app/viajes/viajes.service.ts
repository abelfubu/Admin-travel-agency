import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Viaje } from '../models/Viaje';

@Injectable({ providedIn: 'root' })
export class ViajesService {
  url = 'https://api-coches.herokuapp.com/travels/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Viaje[]> {
    return this.http
      .get<Viaje[]>(this.url + 'special')
      .pipe(map((viajes) => viajes.map((viaje) => new Viaje(viaje))));
  }

  getOne(id: number): Observable<Viaje> {
    return this.http
      .get<Viaje>(this.url + id)
      .pipe(map((viaje) => new Viaje(viaje)));
  }

  addOne(viaje: Viaje): Observable<Viaje> {
    return this.http.post<Viaje>(this.url, viaje);
  }

  updateOne(viaje: Viaje): Observable<Viaje> {
    console.log(viaje);
    return this.http.put<Viaje>(this.url + viaje.id, viaje);
  }

  deleteOne(id: number): Observable<Viaje> {
    return this.http.delete<Viaje>(this.url + id);
  }
}
