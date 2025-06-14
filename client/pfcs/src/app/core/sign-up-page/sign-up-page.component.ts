import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent {
  generatedAccountNumControl = new FormControl('', [
    Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16),
  ]);
  enterPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(64),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/),
  ]);
  confirmPasswordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(64),
    Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/),
  ]);
}
