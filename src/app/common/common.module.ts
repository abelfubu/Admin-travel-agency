import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AngMatModule } from '../ang-mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [InputComponent, ConfirmComponent, LogoComponent],
  imports: [CommonModule, AngMatModule, ReactiveFormsModule],
  exports: [InputComponent, ConfirmComponent, LogoComponent],
})
export class SharedModule {}
