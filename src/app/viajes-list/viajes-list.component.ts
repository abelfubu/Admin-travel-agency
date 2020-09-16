import { Component } from '@angular/core';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.scss'],
})
export class ViajesListComponent {
  filterValue: string;
  constructor() {}

  filterList(value: string): void {
    this.filterValue = value;
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
}
