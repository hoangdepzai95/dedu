import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

    validateForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService, private notification: NzNotificationService) {
    }

    createBasicNotification(): void {
        this.notification.blank( '', 'Đăng kí thành công.');
    }

    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
            this.validateForm.controls[ i ].updateValueAndValidity();
        }

        if (this.validateForm.valid) {
            this.createBasicNotification();
            this.authService.standardLogin(
                this.validateForm.value.email,
                this.validateForm.value.password
            );
        }
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            email            : [ null, [ Validators.email ] ],
            password         : [ null, [ Validators.required ] ],
            agree            : [ false ]
        });
    }
}
