import { TestBed } from '@angular/core/testing';

import { TeService } from './te.service';

describe('TeService', () => {
  let service: TeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
