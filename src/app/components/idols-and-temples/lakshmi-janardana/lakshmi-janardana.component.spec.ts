import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakshmiJanardanaComponent } from './lakshmi-janardana.component';

describe('LakshmiJanardanaComponent', () => {
  let component: LakshmiJanardanaComponent;
  let fixture: ComponentFixture<LakshmiJanardanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakshmiJanardanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LakshmiJanardanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
