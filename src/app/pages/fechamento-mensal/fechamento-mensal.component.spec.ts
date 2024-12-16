import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechamentoMensalComponent } from './fechamento-mensal.component';

describe('FechamentoMensalComponent', () => {
  let component: FechamentoMensalComponent;
  let fixture: ComponentFixture<FechamentoMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechamentoMensalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechamentoMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
