import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AngMatModule } from '../ang-mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { LogoComponent } from './logo/logo.component';
import { BgImgDirective } from '../directives/bg-img.directive';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    InputComponent,
    ConfirmComponent,
    LogoComponent,
    BgImgDirective,
    HeroComponent,
  ],
  imports: [CommonModule, AngMatModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    ConfirmComponent,
    LogoComponent,
    BgImgDirective,
    HeroComponent,
  ],
})
export class SharedModule {}
