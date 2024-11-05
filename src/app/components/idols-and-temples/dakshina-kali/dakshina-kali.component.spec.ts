import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DakshinaKaliComponent } from './dakshina-kali.component';

describe('DakshinaKaliComponent', () => {
  let component: DakshinaKaliComponent;
  let fixture: ComponentFixture<DakshinaKaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DakshinaKaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DakshinaKaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
