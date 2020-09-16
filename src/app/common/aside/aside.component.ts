import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  destinations: string[] = ['Europe', 'EUA', 'South America', 'Asia', 'Africa'];
  constructor() {}

  ngOnInit(): void {}
}
