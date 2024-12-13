import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesProcessedComponent } from './releases-processed.component';

describe('ReleasesProcessedComponent', () => {
  let component: ReleasesProcessedComponent;
  let fixture: ComponentFixture<ReleasesProcessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleasesProcessedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasesProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
