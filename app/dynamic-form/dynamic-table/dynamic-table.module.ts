import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicTableFormControlService } from './dynamic-table-form-control.service';



@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule
  ],
  providers: [
    DynamicTableFormControlService
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
