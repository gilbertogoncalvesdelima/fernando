import { TestBed } from '@angular/core/testing';

import { ProductTypeService } from './product-type.service';

describe('ProdutcTypeService', () => {
  let service: ProductTypeService;

  beforeEach(() => {
  // Configura o ambiente de teste para o ProductTypeService
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
