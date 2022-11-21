import { TestBed } from '@angular/core/testing';

import { PatnerService } from './patner.service';

describe('PatnerService', () => {
  let service: PatnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
