import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTablesComponent } from './release-tables.component';

describe('ReleaseTablesComponent', () => {
  let component: ReleaseTablesComponent;
  let fixture: ComponentFixture<ReleaseTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
