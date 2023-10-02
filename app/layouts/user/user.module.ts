import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';


import { LoginComponent } from './login/login.component';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DynamicFormModule,
    UserRoutingModule
  ],
  providers: [LoginService]
})
export class UserModule { }
