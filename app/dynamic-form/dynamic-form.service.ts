import { Injectable } from '@angular/core';
import { FormBase } from './common/fom-base';

import { CONTROL_TYPES } from './common/dynamic-form-constants';
import { FormText } from './common/form-text';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor() { }

  convertJsonToDynamicCongig(data: any[]) {
    const formFields: FormBase<string>[] = [];

    data.forEach((field) => {
      switch (field.controlType) {
        case CONTROL_TYPES.TEXTBOX:
          formFields.push(
            new FormText({
              key: field.key,
              label: field.label,
              value: field.value,
              required: field.required,
              order: field.order,
              type: field.type,
              placeholder: field.placeholder,
              flexLayout: field.flexLayout,
              inputFieldCss: field.inputFieldCss
            })
          );
          break;
        default:
          break;
      }
    });
    return formFields;
  }
}
