import { TestBed } from '@angular/core/testing';

import { ElementosquimicosService } from './elementosquimicos.service';

describe('ElementosquimicosService', () => {
  let service: ElementosquimicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementosquimicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
