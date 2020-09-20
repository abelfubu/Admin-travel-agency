import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'viajes',
    loadChildren: () =>
      import('./viajes/viajes.module').then((mod) => mod.ViajesModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((mod) => mod.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
