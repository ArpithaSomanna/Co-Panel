import { Injectable } from '@angular/core';
import { FormBase } from './fom-base';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlService {
  constructor() {}

  toFormGroup(fields: FormBase<string>[]) {
    const group: any = {};

    fields.forEach(field => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
