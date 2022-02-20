import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicalComponent } from './academical.component';

describe('AcademicalComponent', () => {
  let component: AcademicalComponent;
  let fixture: ComponentFixture<AcademicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
