import { TestBed, inject } from '@angular/core/testing';

import { PatientDataServiceService } from './patient-data-service.service';

describe('PatientDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientDataServiceService]
    });
  });

  it('should be created', inject([PatientDataServiceService], (service: PatientDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
