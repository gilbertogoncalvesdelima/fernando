import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoProdutosComponent } from './agrupamento-produtos.component';

describe('AgrupamentoProdutosComponent', () => {
  let component: AgrupamentoProdutosComponent;
  let fixture: ComponentFixture<AgrupamentoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrupamentoProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupamentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
