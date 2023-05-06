import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanasComponent } from './semanas.component';

describe('SemanasComponent', () => {
  let component: SemanasComponent;
  let fixture: ComponentFixture<SemanasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemanasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
