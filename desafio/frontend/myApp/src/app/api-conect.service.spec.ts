import { TestBed } from '@angular/core/testing';

import { ApiConectService } from './api-conect.service';

describe('ApiConectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConectService = TestBed.get(ApiConectService);
    expect(service).toBeTruthy();
  });
});
