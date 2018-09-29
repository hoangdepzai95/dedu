import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './app-header/app-header.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AppHeaderComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        AppHeaderComponent
    ]
})

export class LayoutModule {
}
