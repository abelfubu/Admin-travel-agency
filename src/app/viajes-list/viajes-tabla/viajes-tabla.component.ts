import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Viaje } from 'src/app/models';
import { ViajesService } from 'src/app/services/viajes.service';
import { ViajesDetalleComponent } from 'src/app/viajes-detalle/viajes-detalle.component';

@Component({
  selector: 'app-viajes-tabla',
  templateUrl: './viajes-tabla.component.html',
  styleUrls: ['./viajes-tabla.component.scss'],
})
export class ViajesTablaComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'nombre',
    'destino',
    'tipo',
    'rating',
    'actions',
  ];
  viajesList: Viaje[];
  viajesSub: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Viaje>;

  @Input() set filter(value: string) {
    this.dataSource = new MatTableDataSource<Viaje>(
      this.viajesList.filter((viaje) => {
        const val = value.trim().toLowerCase();
        const { nombre, destino, tipo } = viaje;
        return (
          this.filtrify(nombre).startsWith(val) ||
          this.filtrify(destino).startsWith(val) ||
          this.filtrify(tipo).startsWith(val)
        );
      })
    );
    this.dataSource.paginator = this.paginator;
  }

  constructor(private dialog: MatDialog, private vs: ViajesService) {}

  ngOnInit(): void {
    this.vs.getAll();
    this.viajesSub = this.vs.viajes.subscribe((viajes: Viaje[]) => {
      this.viajesList = viajes;
      this.dataSource = new MatTableDataSource<Viaje>(this.viajesList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  mostrarViaje(id: number): void {
    this.dialog.open(ViajesDetalleComponent, { data: { id } });
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
