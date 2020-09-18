import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { InputComponent } from '../common/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngMatModule } from '../ang-mat.module';
import { SharedModule } from '../common/common.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngMatModule,
    SharedModule,
  ],
})
export class AuthModule {}
