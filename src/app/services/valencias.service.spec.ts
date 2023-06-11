import { TestBed } from '@angular/core/testing';

import { ValenciasService } from './valencias.service';

describe('ValenciasService', () => {
  let service: ValenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
