
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts/layouts.component';
import { ServerRequestHandlerModule } from './http/server-request-handler.module';
import { SharedDynamicService } from './shared/services/shared-dynamic.service';
import { SharedService } from './shared/services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServerRequestHandlerModule,
    AppRoutingModule
  ],
  providers: [
    SharedService,
    SharedDynamicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
