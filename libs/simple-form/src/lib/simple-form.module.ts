import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,ReactiveFormsModule],
  declarations: [SimpleFormComponent],
  exports: [SimpleFormComponent]  
})
export class SimpleFormModule {}
