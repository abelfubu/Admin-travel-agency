import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from 'src/app/common/confirm/confirm.component';

import { Viaje } from 'src/app/models';
import { ViajesDetalleComponent } from '../../viajes-detalle/viajes-detalle.component';

@Component({
  selector: 'app-viajes-tabla',
  templateUrl: './viajes-tabla.component.html',
  styleUrls: ['./viajes-tabla.component.scss'],
})
export class ViajesTablaComponent implements OnInit {
  displayedColumns: string[] = [
    'nombre',
    'destino',
    'tipo',
    'rating',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Viaje>;
  @Input() set viajesList(value: Viaje[]) {
    this.dataSource = new MatTableDataSource<Viaje>(value);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  mostrarViaje(id: number): void {
    this.dialog.open(ViajesDetalleComponent, { data: { id } });
  }

  borrarViaje(id: number): void {
    this.dialog.open(ConfirmComponent, { data: { id } });
  }
}
