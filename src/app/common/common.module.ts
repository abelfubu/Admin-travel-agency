import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AngMatModule } from '../ang-mat.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, AngMatModule, ReactiveFormsModule],
  exports: [InputComponent],
})
export class SharedModule {}
