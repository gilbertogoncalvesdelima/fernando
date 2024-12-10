import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupingComponent } from './company-grouping.component';

describe('CompanyGroupingComponent', () => {
  let component: CompanyGroupingComponent;
  let fixture: ComponentFixture<CompanyGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyGroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
