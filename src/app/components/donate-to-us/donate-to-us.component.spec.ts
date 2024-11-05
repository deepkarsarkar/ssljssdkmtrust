import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateToUsComponent } from './donate-to-us.component';

describe('DonateToUsComponent', () => {
  let component: DonateToUsComponent;
  let fixture: ComponentFixture<DonateToUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateToUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateToUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
