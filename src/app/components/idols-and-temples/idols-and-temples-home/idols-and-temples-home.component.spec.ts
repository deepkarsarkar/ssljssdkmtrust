import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolsAndTemplesHomeComponent } from './idols-and-temples-home.component';

describe('IdolsAndTemplesHomeComponent', () => {
  let component: IdolsAndTemplesHomeComponent;
  let fixture: ComponentFixture<IdolsAndTemplesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolsAndTemplesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdolsAndTemplesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
