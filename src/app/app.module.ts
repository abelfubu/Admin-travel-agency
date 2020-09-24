import localeEs from '@angular/common/locales/es';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AngMatModule } from './ang-mat.module';
import { HeaderComponent } from './common/header/header.component';
import { ScrollDirective } from './directives/scroll.directive';
import { FooterComponent } from './common/footer/footer.component';
import { CountdownComponent } from './common/countdown/countdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './auth/auth.guard';
import { AsideComponent } from './common/aside/aside.component';
import { AuthInterceptor } from './auth.interceptor';
import { registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './common/shared.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    ScrollDirective,
    FooterComponent,
    CountdownComponent,
  ],
  imports: [
    AngMatModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
