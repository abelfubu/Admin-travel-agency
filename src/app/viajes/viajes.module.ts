import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { ViajesFormComponent } from './viajes-form/viajes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngMatModule } from '../ang-mat.module';
import { SharedModule } from '../common/shared.module';
import { ViajesListComponent } from './viajes-list/viajes-list.component';
import { ViajesDetalleComponent } from './viajes-detalle/viajes-detalle.component';
import { ViajesFilterComponent } from './viajes-list/viajes-filter/viajes-filter.component';
import { ViajesTablaComponent } from './viajes-list/viajes-tabla/viajes-tabla.component';

@NgModule({
  declarations: [
    ViajesFormComponent,
    ViajesListComponent,
    ViajesDetalleComponent,
    ViajesFilterComponent,
    ViajesTablaComponent,
  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    ReactiveFormsModule,
    AngMatModule,
    SharedModule,
  ],
})
export class ViajesModule {}
