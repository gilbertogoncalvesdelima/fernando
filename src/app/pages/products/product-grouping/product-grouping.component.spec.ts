import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupingComponent } from './product-grouping.component';

describe('ProductGroupingComponent', () => {
  let component: ProductGroupingComponent;
  let fixture: ComponentFixture<ProductGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
