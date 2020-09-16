import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Viaje } from '../models/Viaje';
import { ViajesService } from '../services/viajes.service';
import { ViajesDetalleComponent } from '../viajes-detalle/viajes-detalle.component';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent implements OnInit, OnDestroy {
  viajesList: Viaje[];
  viajesSub: Subscription;
  displayedColumns: string[] = [
    'nombre',
    'destino',
    'tipo',
    'symbol',
    'actions',
  ];
  dataSource: MatTableDataSource<Viaje>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private vs: ViajesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.vs.getAll();
    this.viajesSub = this.vs.viajes.subscribe((viajes: Viaje[]) => {
      this.viajesList = viajes;
      this.dataSource = new MatTableDataSource<Viaje>(this.viajesList);
      this.dataSource.paginator = this.paginator;
    });
  }

  filterList(value: string): void {
    this.dataSource = new MatTableDataSource<Viaje>(
      this.viajesList.filter((viaje) =>
        viaje.nombre.toLowerCase().startsWith(value.trim().toLowerCase())
      )
    );
    this.dataSource.paginator = this.paginator;
  }

  mostrarViaje(id: number): void {
    this.dialog.open(ViajesDetalleComponent, { data: { id } });
  }

  // randomSize(index: number): string[] {
  //   const classes = [];
  //   if (index % 7 === 0) {
  //     classes.push('horizontal');
  //   } else if (index % 5 === 0) {
  //     classes.push('vertical');
  //   }
  //   return classes;
  // }

  ngOnDestroy(): void {
    this.viajesSub.unsubscribe();
  }
}
