import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { fly } from '../../../common/animation';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Viaje } from 'src/app/models';

@Component({
  selector: 'app-viajes-tabla',
  templateUrl: './viajes-tabla.component.html',
  styleUrls: ['./viajes-tabla.component.scss'],
  animations: [fly],
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
