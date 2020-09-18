import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Viaje } from '../../models/Viaje';
import { ViajesService } from '../viajes.service';
import { ViajesFormComponent } from '../viajes-form/viajes-form.component';

@Component({
  selector: 'app-viajes-detalle',
  templateUrl: './viajes-detalle.component.html',
  styleUrls: ['./viajes-detalle.component.scss'],
})
export class ViajesDetalleComponent implements OnInit {
  viaje: Viaje;

  constructor(
    private vs: ViajesService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private passedData: { id: number }
  ) {}

  ngOnInit(): void {
    this.vs
      .getOne(this.passedData.id)
      .subscribe((response) => (this.viaje = response));
  }

  editarViaje(viaje: Viaje): void {
    this.dialog.closeAll();
    this.dialog.open(ViajesFormComponent, { data: { viaje }, width: '75%' });
  }
}
