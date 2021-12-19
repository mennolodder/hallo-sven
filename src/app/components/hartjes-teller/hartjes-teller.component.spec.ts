import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HartjesTellerComponent } from './hartjes-teller.component';

describe('HartjesTellerComponent', () => {
  let component: HartjesTellerComponent;
  let fixture: ComponentFixture<HartjesTellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HartjesTellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HartjesTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
