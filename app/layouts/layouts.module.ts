import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { CommonComponentsModule } from '../common-components/common-components.module';


@NgModule({
  declarations: [CommonLayoutComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    AngularMaterialModule,
    LayoutsRoutingModule
  ]
})
export class LayoutsModule { }
