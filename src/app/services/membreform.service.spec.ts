import { TestBed } from '@angular/core/testing';

import { MembreformService } from './membreform.service';

describe('MembreformService', () => {
  let service: MembreformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
