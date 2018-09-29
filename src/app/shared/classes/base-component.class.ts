import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/index';

export class BaseComponent implements OnDestroy {

    private subs: Subscription[] = [];

    ngOnDestroy() {
        for (const sub of this.subs) {
            if (typeof sub.unsubscribe === 'function') {
                sub.unsubscribe();
            }
        }
    }

    set sub(sub: Subscription)  {
       this.subs.push(sub);
    }
}
