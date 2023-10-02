import { TestBed } from '@angular/core/testing';

import { DynamicTableFormControlService } from './dynamic-table-form-control.service';

describe('DynamicTableFormControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicTableFormControlService = TestBed.get(DynamicTableFormControlService);
    expect(service).toBeTruthy();
  });
});
