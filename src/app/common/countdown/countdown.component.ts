import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  totalCount = new Date('2020-9-31').getTime();
  now = this.totalCount - new Date().getTime();
  counter: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;

  constructor() {}

  ngOnInit(): void {
    this.counter = this.now;

    setInterval(() => {
      this.counter -= 1000;
      this.dias = Math.floor(this.counter / (1000 * 60 * 60 * 24));
      this.horas = Math.floor(
        (this.counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutos = Math.floor(
        (this.counter % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.segundos = Math.floor((this.counter % (1000 * 60)) / 1000);
    }, 1000);
  }

  resetCount(): void {
    this.counter = this.totalCount;
  }
}
