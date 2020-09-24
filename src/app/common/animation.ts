import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fly = trigger('flyInOut', [
  state('in', style({ transform: 'scale(1)' })),
  transition(':enter', [style({ transform: 'scale(0)' }), animate(200)]),
  transition(':leave', [animate(200, style({ transform: 'scale(1)' }))]),
]);
