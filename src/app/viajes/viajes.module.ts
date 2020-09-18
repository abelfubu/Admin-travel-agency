import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { InputComponent } from '../common/input/input.component';
import { ViajesFormComponent } from './viajes-form/viajes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngMatModule } from '../ang-mat.module';
import { SharedModule } from '../common/common.module';

@NgModule({
  declarations: [ViajesFormComponent],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    ReactiveFormsModule,
    AngMatModule,
    SharedModule,
  ],
})
export class ViajesModule {}
