import { trigger, animate, transition, style } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('381ms cubic-bezier(0.4, 0, 0.2, 1)', style({ opacity: 1 }))
    ])
]);

