export class FormBase<T> {
         value: T;
         key: string;
         label: string;
         required: boolean;
         order: number;
         controlType: string;
         type: string;
         placeholder: string;
         isEditable: boolean;
         isVisible: boolean;
         options: { key: string; value: string }[];
         flexLayout: { fxLayout: string; fxLayoutAlign: string };
         inputFieldCss: { divCss: string; matFormFieldCss: string };

         constructor(
           options: {
             value?: T;
             key?: string;
             label?: string;
             required?: boolean;
             order?: number;
             controlType?: string;
             type?: string;
             placeholder?: string;
             isEditable?: boolean;
             isVisible?: boolean;
             options?: { key: string; value: string }[];
             flexLayout?: { fxLayout: string; fxLayoutAlign: string };
             inputFieldCss?: { divCss: string; matFormFieldCss: string };
           } = {}
         ) {
           this.value = options.value;
           this.key = options.key || '';
           this.label = options.label || '';
           this.required = !!options.required;
           this.order = options.order === undefined ? 1 : options.order;
           this.controlType = options.controlType || '';
           this.type = options.type || '';
           this.options = options.options;
           this.isEditable = options.isEditable;
           this.isVisible = options.isVisible;
           this.placeholder = options.placeholder || '';
           this.flexLayout = options.flexLayout;
           this.inputFieldCss = options.inputFieldCss;
         }
       }
