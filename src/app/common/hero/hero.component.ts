import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  index = 0;
  classes: string[];
  captions = [
    {
      img:
        'https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      text: 'Conocer mundo!',
    },
    {
      img:
        'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
      text: 'Vivir experiencias nuevas!',
    },
    {
      img:
        'https://images.unsplash.com/photo-1437846972679-9e6e537be46e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
      text: 'Descubrir...',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.index < this.captions.length - 1
        ? (this.index += 1)
        : (this.index = 0);
      this.classes = ['slide-in'];
    }, 5000);
    setTimeout(() => {
      setInterval(() => {
        this.classes.push('slide-out');
        this.classes = [];
      }, 5000);
    }, 4850);
  }
}
