import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoProducaoComponent } from './grupo-producao.component';

describe('GrupoProducaoComponent', () => {
  let component: GrupoProducaoComponent;
  let fixture: ComponentFixture<GrupoProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoProducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrupoProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
