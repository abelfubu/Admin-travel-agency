import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajesListComponent } from './viajes-list/viajes-list.component';

const routes: Routes = [{ path: '', component: ViajesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesRoutingModule {}
