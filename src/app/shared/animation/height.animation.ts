import { trigger, animate, transition, style } from '@angular/animations';

export const heightAnimation = trigger('heightAnimation', [
    transition(':enter, :leave', [
        style({ maxHeight: '0px' }),
        animate('600ms', style({ maxHeight: '2000px' }))
    ])
]);
