import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/index';
import { Router, NavigationEnd, ActivatedRoute, NavigationStart } from '@angular/router';


declare const $: any;

@Injectable({
    providedIn: 'root'
})

export class LayoutService {

    private isMiniSidebar: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private isBlankLayout: BehaviorSubject<boolean> = new BehaviorSubject(false);

    private noSideBar = new BehaviorSubject({ value: false, prevMinimizeState: false, backPath: '' });

    private isFirstRouteEvent = true;

    public whenFirstRouteEnd = Promise.resolve();

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
        this.whenFirstRouteEnd = new Promise((resolve) => {
            this.subscribeToRouteEvent(resolve);
        });

        this.noSideBar.subscribe((noSideBar) => {
            if (noSideBar.value) {
                if (!document.body.classList.contains('no-sidebar')) {
                    document.body.classList.add('no-sidebar');

                    if (this.isFirstRouteEvent) {
                        document.body.classList.add('no-animation-sidebar');
                    }
                }

            } else if (document.body.classList.contains('no-sidebar')) {

                document.body.classList.remove('no-sidebar');

                document.body.classList.remove('no-animation-sidebar');

                if (!this.noSideBar.getValue().prevMinimizeState) {
                }
            }
        });
    }

    subscribeToRouteEvent(resolve: Function) {
        this.router.events.subscribe((event) => {

            if (event instanceof NavigationEnd) {
                let outLetRoute = this.activatedRoute;
                let isGreyStyle = false;
                let isBlankLayout = false;
                let isNoSideBar = false;

                while (outLetRoute.firstChild) {
                    outLetRoute = outLetRoute.firstChild;


                    if (!isBlankLayout) {
                        isBlankLayout = this.updateIsBlankLayout(outLetRoute);
                    }

                }

                if (this.isFirstRouteEvent) {
                    resolve();
                }

                this.isFirstRouteEvent = false;
            }
        });
    }


    updateIsBlankLayout(activatedRoute: ActivatedRoute): boolean {
        if (activatedRoute.routeConfig && activatedRoute.routeConfig.data && activatedRoute.routeConfig.data.blankLayout) {
            this.isBlankLayout.next(true);
            return true;
        } else {
            this.isBlankLayout.next(false);
            return false;
        }
    }

    getIsBlankLayout(): Observable<boolean> {
        return this.isBlankLayout.asObservable();
    }

}
