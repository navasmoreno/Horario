import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaatrasComponent } from './cuentaatras.component';

describe('CuentaatrasComponent', () => {
  let component: CuentaatrasComponent;
  let fixture: ComponentFixture<CuentaatrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaatrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaatrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
