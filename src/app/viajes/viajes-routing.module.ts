import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthActGuard } from '../auth/auth.act.guard';
import { ViajesDetalleComponent } from './viajes-detalle/viajes-detalle.component';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

const routes: Routes = [
  { path: '', component: ViajesListComponent, canActivate: [AuthActGuard] },
  {
    path: ':id',
    component: ViajesDetalleComponent,
    canActivate: [AuthActGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesRoutingModule {}
