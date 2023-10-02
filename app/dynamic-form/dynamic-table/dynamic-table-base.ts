export class DynamicTableBase<T> {
  tableHeader: { title: string; icon: string }[];
  tableBody: DynamicTableBody<string>[];

  constructor(
    options: {
      tableHeader?: { title: string; icon: string }[];
      tableBody?: DynamicTableBody<string>[];
    } = {}
  ) {
    this.tableHeader = options.tableHeader;
    this.tableBody = options.tableBody;
  }
}

export class DynamicTableBody<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    controlType: string;
    type: string;
    isEditable: boolean;
    isVisible: boolean;
    placeholder: string;
    options: { key: string; value: string }[];
    inputFieldCss: { divCss: string; matFormFieldCss: string };
    actions: {
      dropdown: boolean;
      actionItem: { type: string; buttonRequired: boolean, icon: string, text: string };
    };
    constructor(
      options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        controlType?: string;
        type?: string;
        isEditable?: boolean;
        isVisible?: boolean;
        placeholder?: string;
        options?: { key: string; value: string }[];
        inputFieldCss?: { divCss: string; matFormFieldCss: string };
        actions?: {
          dropdown: boolean;
          actionItem: { type: string; buttonRequired: boolean, icon: string, text: string };
        };
      } = {}
    ) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options;
      this.isEditable = options.isEditable;
      this.isVisible = options.isVisible;
      this.placeholder = options.placeholder || '';
      this.inputFieldCss = options.inputFieldCss;
    }
}

export interface DynamicTableConfig {
  tableHeaders: {
    title: string;
    cssClass?: string;
    icon?: string;
  }[];
  keys: any[];
  tableData: { key: string; cssClass?: string; icon?: string, value?: string }[];
}
