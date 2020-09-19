import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { AngMatModule } from './ang-mat.module';
import { ScrollDirective } from './directives/scroll.directive';
import { FooterComponent } from './common/footer/footer.component';
import { CountdownComponent } from './common/countdown/countdown.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AsideComponent } from './common/aside/aside.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollDirective,
    FooterComponent,
    CountdownComponent,
    AsideComponent,
  ],
  imports: [
    AngMatModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
