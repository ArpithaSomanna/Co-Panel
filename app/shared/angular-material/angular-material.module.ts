import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, MatFormFieldModule, MatInputModule],
  exports: [FlexLayoutModule, MatFormFieldModule, MatInputModule]
})
export class AngularMaterialModule {}
