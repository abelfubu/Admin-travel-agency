import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BgImgDirective } from './pipes/bg-img.directive';
import { HeaderComponent } from './common/header/header.component';
import { AngMatModule } from './ang-mat.module';
import { HeroComponent } from './common/hero/hero.component';
import { ScrollDirective } from './pipes/scroll.directive';
import { FooterComponent } from './common/footer/footer.component';
import { CountdownComponent } from './common/countdown/countdown.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AsideComponent } from './common/aside/aside.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    BgImgDirective,
    HeaderComponent,
    HeroComponent,
    ScrollDirective,
    FooterComponent,
    CountdownComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngMatModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
