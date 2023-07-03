import { TestBed } from '@angular/core/testing';

import { SimpleserviceService } from './simpleservice.service';

describe('SimpleserviceService', () => {
  let service: SimpleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
