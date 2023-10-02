import { FormGroup } from '@angular/forms';

export const CONTROL_TYPES = Object.freeze({
  TEXTBOX: 'textbox',
  TEXTAREA: '',
  DROPDOWN: 'dropdown',
  RADIO: '',
  FILE: '',
  CHECKBOX: ''
});

export interface DynamicFormOutput {
  fieldChanged: any;
  form: FormGroup;
}
