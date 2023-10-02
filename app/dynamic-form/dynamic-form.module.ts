import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormControlService } from './common/form-control.service';

import { DynamicFormComponent } from './dynamic-form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { DynamicFormService } from './dynamic-form.service';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';

@NgModule({
  declarations: [DynamicFormComponent, FormInputComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule],
  exports: [DynamicFormComponent],
  providers: [FormControlService, DynamicFormService],
})
export class DynamicFormModule {}
