import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraProdutoComponent } from './carteira-produtos.component';

describe('CarteiraProdutoComponent', () => {
  let component: CarteiraProdutoComponent;
  let fixture: ComponentFixture<CarteiraProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteiraProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteiraProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
