import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss',
})
export class SimpleFormComponent {

  registrationForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) {}
  
  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
