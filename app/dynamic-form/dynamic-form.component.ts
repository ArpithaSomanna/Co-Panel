import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBase } from './common/fom-base';
import { FormGroup } from '@angular/forms';
import { FormControlService } from './common/form-control.service';
import { DynamicFormOutput } from './common/dynamic-form-constants';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styles: [],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() formFields: FormBase<string>[] = [];
  @Input() form: FormGroup;

  @Output() payLoad = new EventEmitter<DynamicFormOutput>();

  constructor(
    private formControlService: FormControlService
  ) {}

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.formFields.currentValue) {
      this.form = this.formControlService.toFormGroup(this.formFields);
      this.onformFieldChange({field: null, value: null});
    }
  }

  onformFieldChange(event) {
    if (event.field) {
      this.form.controls[event.field.key].patchValue(event.value);
    }
    this.payLoad.emit({fieldChanged: event.field, form: this.form});
  }

}
