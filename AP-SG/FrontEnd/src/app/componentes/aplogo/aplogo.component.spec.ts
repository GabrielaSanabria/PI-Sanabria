import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APLogoComponent } from './aplogo.component';

describe('APLogoComponent', () => {
  let component: APLogoComponent;
  let fixture: ComponentFixture<APLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APLogoComponent]
    });
    fixture = TestBed.createComponent(APLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
