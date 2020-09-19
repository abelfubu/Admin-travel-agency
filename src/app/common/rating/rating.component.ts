import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  stars = [1, 2, 3, 4, 5];
  @Input() currentRating = 0;
  @Input() editable = false;
  @Output() newRating = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  setRating(rating: number): void {
    if (this.editable) {
      this.currentRating = rating + 1;
      this.newRating.emit(rating + 1);
    }
  }
}
