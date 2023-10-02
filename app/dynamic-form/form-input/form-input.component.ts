import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBase } from '../common/fom-base';
import { FormGroup } from '@angular/forms';
import { CONTROL_TYPES } from '../common/dynamic-form-constants';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent implements OnInit {
  @Input() field: FormBase<string>;
  @Input() form: FormGroup;

  @Output() formFieldChange = new EventEmitter<any>();

  CONTROLTYPES = CONTROL_TYPES;
  constructor() {}

  ngOnInit() {}

  get isValid() {
    return (this.form.controls[this.field.key].touched && this.form.controls[this.field.key].invalid);
  }

  onFieldInputChange() {
    this.formFieldChange.emit({ field: this.field, value: this.form.controls[this.field.key].value});
  }
}
