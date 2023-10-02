import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './http-interceptor.service';
import { ServerRequestService } from './server-request.service';
import { CommonHttpService } from './common-http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ServerRequestService,
    CommonHttpService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    }
  ],
  exports: [
    HttpClientModule
  ]
})
export class ServerRequestHandlerModule { }
