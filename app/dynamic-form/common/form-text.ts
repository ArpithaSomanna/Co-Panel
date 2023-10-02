import { FormBase } from './fom-base';
import { CONTROL_TYPES } from './dynamic-form-constants';

export class FormText extends FormBase<string> {
  controlType = CONTROL_TYPES.TEXTBOX;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
