import { TestBed } from '@angular/core/testing';

import { IsVaccinatedService } from './is-vaccinated.service';

describe('IsVaccinatedService', () => {
  let service: IsVaccinatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsVaccinatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
