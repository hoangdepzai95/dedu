import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';


const CLIENT_ID = 'myapp';
const CLIENT_SECRET = 'abc123';

declare const window: any;

declare const toastr: any;

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    pathname: string;
    queryParams: any = {};

    isLogged = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.isLogged.next(this.isLoggedIn());
    }

    standardLogin(userName: string, password: string) {
        this.createSession({ access_token: 'sdfsdfd' });
        this.router.navigate(['/test-list']);
        this.isLogged.next(true);
    }

    handleLoginResponse(res: any) {
        this.createSession(res.data);
        this.router.navigate([this.pathname || '/campaigns'], { queryParams: this.queryParams });
    }

    createSession(response: any) {
        const expiresAt = moment().add(response.expires_in, 'second');

        localStorage.setItem('auth_token', response.access_token);
        localStorage.setItem('auth_refresh_token', response.refresh_token);
        localStorage.setItem('auth_expires_at', JSON.stringify(expiresAt.valueOf()));
    }

    isLoggedIn(): boolean {
        return !!this.getAccessToken();
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_expires_at');
        localStorage.removeItem('auth_refresh_token');
        this.router.navigate(['/login']);
    }

    getExpiration(): moment.Moment {
        const expiration = localStorage.getItem('auth_expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    getAccessToken(): string {
        return localStorage.getItem('auth_token') || '';
    }

    getRefreshToken(): string {
        return localStorage.getItem('auth_refresh_token') || '';
    }

    getTokenPayload(): any {
        const token = this.getAccessToken();
        const payLoad = token.split('.')[1];

        try {
            return JSON.parse(window.atob(payLoad));
        } catch (err) {
            console.log(err);
            return {};
        }
    }

}
