import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupamentoEmpresasComponent } from './agrupamento-empresas.component';

describe('AgrupamentoEmpresasComponent', () => {
  let component: AgrupamentoEmpresasComponent;
  let fixture: ComponentFixture<AgrupamentoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrupamentoEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgrupamentoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
