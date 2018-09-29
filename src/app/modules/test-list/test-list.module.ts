import { NgModule } from '@angular/core';
import { TestListComponent } from './test-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    declarations: [
        TestListComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'test-list',
                component: TestListComponent
            }
        ])
    ]
})

export class TestListModule {
}
