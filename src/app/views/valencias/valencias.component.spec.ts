import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValenciasComponent } from './valencias.component';

describe('ValenciasComponent', () => {
  let component: ValenciasComponent;
  let fixture: ComponentFixture<ValenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
