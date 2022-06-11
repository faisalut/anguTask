import { HttpClient, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './core/interceptor/intercepter.service';
import { LayoutsModule } from './layouts/layouts.module';
import { MainModule } from './modules/main.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    MainModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
