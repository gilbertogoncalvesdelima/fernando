import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoManualComponent } from './lancamento-manual.component';

describe('LancamentoManualComponent', () => {
  let component: LancamentoManualComponent;
  let fixture: ComponentFixture<LancamentoManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoManualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
