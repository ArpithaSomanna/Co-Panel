import { Injectable } from '@angular/core';
import { DynamicFormService } from 'src/app/dynamic-form/dynamic-form.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDynamicService {

  constructor(
    private dynamicFormService: DynamicFormService
  ) { }

  getDynamicFormConfig(screenConfig: any) {
    return this.dynamicFormService.convertJsonToDynamicCongig(screenConfig);
  }

}
