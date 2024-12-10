import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWalletComponent } from './product-wallet.component';

describe('ProductWalletComponent', () => {
  let component: ProductWalletComponent;
  let fixture: ComponentFixture<ProductWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
