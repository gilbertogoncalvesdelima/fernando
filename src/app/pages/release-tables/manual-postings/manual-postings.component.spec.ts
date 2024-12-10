import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualPostingsComponent } from './manual-postings.component';

describe('ManualPostingsComponent', () => {
  let component: ManualPostingsComponent;
  let fixture: ComponentFixture<ManualPostingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualPostingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualPostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
