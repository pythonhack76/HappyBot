import { TestBed } from '@angular/core/testing';

import { ServizioTestService } from './service/servizio-test.service';

describe('ServizioTestService', () => {
  let service: ServizioTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServizioTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
