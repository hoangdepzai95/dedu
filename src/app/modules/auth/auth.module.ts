import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    blankLayout: true
                }
            },
            {
                path: 'sign-up',
                component: SignUpComponent,
                data: {
                    blankLayout: true
                }
            }
        ])
    ]
})

export class AuthModule {
}
