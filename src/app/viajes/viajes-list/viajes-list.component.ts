import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Viaje } from '../../models';
import { ViajesFormComponent } from '../viajes-form/viajes-form.component';
import { ViajesUIService } from '../viajes-ui.service';
import { ViajesService } from '../viajes.service';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent implements OnInit, OnDestroy {
  viajesFiltered: Viaje[];
  viajesList: Viaje[];
  viajesSub: Subscription;
  loading = true;
  constructor(
    private vs: ViajesService,
    private vui: ViajesUIService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vs.getAll();
    this.viajesSub = this.vs.viajes.subscribe((viajes: Viaje[]) => {
      this.viajesFiltered = viajes;
      this.viajesList = viajes;
      this.loading = false;
    });
  }

  filterList(value: string): void {
    this.viajesFiltered = this.viajesList?.filter((viaje) => {
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

  mostrarViaje(id: number): void {
    this.route.navigate(['viajes', id]);
  }

  borrarViaje(id: number): void {
    this.vui.confirmUI().subscribe((confirmation) => {
      if (confirmation) {
        this.vs.deleteOne(id).subscribe((response) => {
          this.vs.getAll();
          this.vui.snackBarUI('Viaje Borrado');
        });
      }
    });
  }

  editarViaje(viaje: Viaje): void {
    this.dialog.open(ViajesFormComponent, { data: { viaje }, width: '75%' });
  }

  ngOnDestroy(): void {
    this.viajesSub.unsubscribe();
  }
}
