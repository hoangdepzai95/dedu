import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeOutAnimation = trigger('fadeOut', [
        transition(':leave', [   // :leave is alias to '* => void'
            animate('281ms cubic-bezier(0.4, 0, 0.2, 1)', style({opacity: 0}))
        ])
    ]);

export function  getCustomFadeOut(timings: string) {
    return  trigger('customFadeOut', [
        transition(':leave', [   // :leave is alias to '* => void'
            animate(timings, style({opacity: 0}))
        ])
    ]);
}
