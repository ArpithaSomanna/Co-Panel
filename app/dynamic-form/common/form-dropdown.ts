import { FormBase } from './fom-base';
import { CONTROL_TYPES } from './dynamic-form-constants';

export class FormDropDown extends FormBase<string> {
    controlType = CONTROL_TYPES.DROPDOWN;
    options: { key: string; value: string }[] = [];

    constructor(options: {} = {}) {
      super(options);
      this.options = options['options'] || [];
    }
}
