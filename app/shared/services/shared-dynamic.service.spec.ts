import { TestBed } from '@angular/core/testing';

import { SharedDynamicService } from './shared-dynamic.service';

describe('SharedDynamicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedDynamicService = TestBed.get(SharedDynamicService);
    expect(service).toBeTruthy();
  });
});
