import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViajesListComponent } from './viajes/viajes-list/viajes-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BgImgDirective } from './bg-img.directive';
import { HeaderComponent } from './common/header/header.component';
import { AngMatModule } from './ang-mat.module';
import { ViajesDetalleComponent } from './viajes/viajes-detalle/viajes-detalle.component';
import { ViajesFormComponent } from './viajes/viajes-form/viajes-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './common/input/input.component';
import { HeroComponent } from './common/hero/hero.component';
import { ScrollDirective } from './scroll.directive';
import { FooterComponent } from './common/footer/footer.component';
import { CountdownComponent } from './common/countdown/countdown.component';
import { ViajesFilterComponent } from './viajes/viajes-list/viajes-filter/viajes-filter.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AsideComponent } from './common/aside/aside.component';
import { ViajesTablaComponent } from './viajes/viajes-list/viajes-tabla/viajes-tabla.component';
import { LogoComponent } from './common/logo/logo.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ViajesListComponent,
    BgImgDirective,
    HeaderComponent,
    ViajesDetalleComponent,
    ViajesFormComponent,
    InputComponent,
    HeroComponent,
    ScrollDirective,
    FooterComponent,
    CountdownComponent,
    ViajesFilterComponent,
    AsideComponent,
    ViajesTablaComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngMatModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
