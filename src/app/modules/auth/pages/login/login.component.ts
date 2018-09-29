import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {

    validateForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
    }


    submitForm(): void {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[ i ].markAsDirty();
            this.validateForm.controls[ i ].updateValueAndValidity();
        }

        if (this.validateForm.valid) {
            this.authService.standardLogin(
                this.validateForm.value.userName,
                this.validateForm.value.password
            );
        }
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            userName: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            remember: [ true ]
        });
    }
}

