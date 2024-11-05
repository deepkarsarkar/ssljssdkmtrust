import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyTemplesComponent } from './nearby-temples.component';

describe('NearbyTemplesComponent', () => {
  let component: NearbyTemplesComponent;
  let fixture: ComponentFixture<NearbyTemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyTemplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearbyTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
