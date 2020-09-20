import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Viaje } from 'src/app/models';

@Component({
  selector: 'app-viajes-tabla',
  templateUrl: './viajes-tabla.component.html',
  styleUrls: ['./viajes-tabla.component.scss'],
})
export class ViajesTablaComponent implements AfterViewInit {
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
  }

  @Output() mostrar = new EventEmitter<number>();
  @Output() borrar = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
