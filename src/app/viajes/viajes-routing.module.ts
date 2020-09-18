import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajesDetalleComponent } from './viajes-detalle/viajes-detalle.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

const routes: Routes = [
  { path: '', component: ViajesListComponent },
  { path: ':id', component: ViajesDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesRoutingModule {}
