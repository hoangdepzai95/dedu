import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { BaseComponent } from '../../../shared/classes/base-component.class';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['app-header.component.scss']
})

export class AppHeaderComponent extends BaseComponent{

    isLoggedIn: boolean;

    constructor(private authService: AuthService) {
        super();

        this.sub = this.authService.isLogged.subscribe((value) => {
            this.isLoggedIn = value;
        });
    }

    logOut() {
        this.authService.logout();
    }
}
