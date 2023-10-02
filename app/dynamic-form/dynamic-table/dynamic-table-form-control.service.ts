import { Injectable } from '@angular/core';
import { DynamicTableBody } from './dynamic-table-base';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableFormControlService {

  constructor() { }

  toTableFormGroup(fields: DynamicTableBody<string>[]) {
    const group: any = {};
    fields.forEach(field => {

    });
  }
}
