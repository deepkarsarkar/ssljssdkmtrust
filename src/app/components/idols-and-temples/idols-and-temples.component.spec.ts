import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolsAndTemplesComponent } from './idols-and-temples.component';

describe('IdolsAndTemplesComponent', () => {
  let component: IdolsAndTemplesComponent;
  let fixture: ComponentFixture<IdolsAndTemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolsAndTemplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdolsAndTemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
