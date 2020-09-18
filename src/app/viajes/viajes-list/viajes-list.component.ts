import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfirmComponent } from 'src/app/common/confirm/confirm.component';
import { Viaje } from '../../models';
import { ViajesDetalleComponent } from '../viajes-detalle/viajes-detalle.component';
import { ViajesFormComponent } from '../viajes-form/viajes-form.component';
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
  constructor(
    private vs: ViajesService,
    private route: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.vs.getAll();
    this.viajesSub = this.vs.viajes.subscribe((viajes: Viaje[]) => {
      this.viajesFiltered = viajes;
      this.viajesList = viajes;
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
    const dialogRef = this.dialog.open(ConfirmComponent);

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.vs.deleteOne(id).subscribe((viaje) => {
          this.vs.getAll();
          this.openSnackBar('Viaje Borrado');
        });
      }
    });
  }

  editarViaje(viaje: Viaje): void {
    this.dialog.open(ViajesFormComponent, { data: { viaje }, width: '75%' });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Vale', {
      duration: 2000,
    });
  }

  ngOnDestroy(): void {
    this.viajesSub.unsubscribe();
  }
}
