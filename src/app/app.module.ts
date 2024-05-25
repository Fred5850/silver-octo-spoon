import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeData from '@angular/common/locales/en-DK';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KirbyExperimentalModule, KirbyModule } from '@kirbydesign/designsystem';

import { KirbyModalModule } from '@kirbydesign/designsystem/modal/v2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './page/header/header.component';

registerLocaleData(localeData);

@NgModule({
  declarations: [AppComponent, HomeComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-DK' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    KirbyModule,
    KirbyExperimentalModule,
    KirbyModalModule,
    HeaderComponent,
  ],
})
export class AppModule {}
