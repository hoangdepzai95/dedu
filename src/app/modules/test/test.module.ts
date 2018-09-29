import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { catchClause } from '@babel/types';

@NgModule({
    declarations: [
        TestComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'test',
                component: TestComponent
            }
        ])
    ]
})

export class TestModule {

}
