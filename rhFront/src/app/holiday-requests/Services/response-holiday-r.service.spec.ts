import { TestBed } from '@angular/core/testing';

import { ResponseHolidayRService } from './response-holiday-r.service';

describe('ResponseHolidayRService', () => {
  let service: ResponseHolidayRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseHolidayRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
