import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyClosingComponent } from './monthly-closing.component';

describe('MonthlyClosingComponent', () => {
  let component: MonthlyClosingComponent;
  let fixture: ComponentFixture<MonthlyClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyClosingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
