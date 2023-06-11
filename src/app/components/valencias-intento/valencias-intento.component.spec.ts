import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValenciasIntentoComponent } from './valencias-intento.component';

describe('ValenciasIntentoComponent', () => {
  let component: ValenciasIntentoComponent;
  let fixture: ComponentFixture<ValenciasIntentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValenciasIntentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValenciasIntentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
