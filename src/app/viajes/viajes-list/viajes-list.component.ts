import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Viaje } from '../../models';
import { ViajesService } from '../viajes.service';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent implements OnInit, OnDestroy {
  viajesList: Viaje[];
  viajesSub: Subscription;
  constructor(private vs: ViajesService) {}

  ngOnInit(): void {
    this.vs.getAll();
    this.viajesSub = this.vs.viajes.subscribe((viajes: Viaje[]) => {
      this.viajesList = viajes;
      console.log(this.viajesList);
    });
  }

  filterList(value: string): void {
    this.viajesList?.filter((viaje) => {
      const val = value.trim().toLowerCase();
      const { nombre, destino, tipo } = viaje;
      return (
        this.filtrify(nombre).startsWith(val) ||
        this.filtrify(destino).startsWith(val) ||
        this.filtrify(tipo).startsWith(val)
      );
    });
  }

  filtrify(value: string): string {
    return value
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  ngOnDestroy(): void {
    this.viajesSub.unsubscribe();
  }
}
