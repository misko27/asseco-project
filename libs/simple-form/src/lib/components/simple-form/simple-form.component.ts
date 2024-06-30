import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss',
})
export class SimpleFormComponent {


  squareRootForm:FormGroup = this.fb.group({
    inputValue: ['', ],
    outputValue: ['', ],
  });

  constructor(private fb: FormBuilder) {}
  
  

  readonly calculateSquareRoot = () => {
    this.squareRootForm.markAllAsTouched();
    if (this.squareRootForm.valid) {

      const inputNumber = +(this.squareRootForm.controls['inputValue'].value ?? 0);
      let result = 0;
      const step = 0;
      let guess = 0;

      for (let i = 0; i <= inputNumber; i++) {
        if (i * i === inputNumber) {
          result = i;
          break
        } else if (i * i > inputNumber) {
          guess = i - 1;
          result = this.helperFunction(guess, step, inputNumber);
          break;
        }
      }

      this.squareRootForm.controls['outputValue'].setValue(String(result));
      return
    }
  };

  helperFunction(result: number, step: number, inputNumber: number): number {
    if (step > 3) {
      return result;
    }
    for (let j = 0; j <= 9; j++) {
      const guess = +(result + (j / Math.pow(10, step))).toFixed(step);
      if (guess * guess === inputNumber) {
        return guess
      } else if (guess * guess > inputNumber) {
        return this.helperFunction(result + ((j - 1) / Math.pow(10, step)), step + 1, inputNumber);
      }

    }
    return result;
  }
}
