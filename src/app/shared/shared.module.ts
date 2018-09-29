import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {
}
