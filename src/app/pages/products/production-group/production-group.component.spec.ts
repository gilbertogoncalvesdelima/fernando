import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionGroupComponent } from './production-group.component';

describe('ProductionGroupComponent', () => {
  let component: ProductionGroupComponent;
  let fixture: ComponentFixture<ProductionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
