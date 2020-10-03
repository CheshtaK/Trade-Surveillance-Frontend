import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HttpClientModule,
    MatDividerModule,
    MatGridListModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/users/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
