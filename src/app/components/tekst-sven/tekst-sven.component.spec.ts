import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekstSvenComponent } from './tekst-sven.component';

describe('TekstSvenComponent', () => {
  let component: TekstSvenComponent;
  let fixture: ComponentFixture<TekstSvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekstSvenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekstSvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
