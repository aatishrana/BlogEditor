import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSetterComponent } from './style-setter.component';

describe('StyleSetterComponent', () => {
  let component: StyleSetterComponent;
  let fixture: ComponentFixture<StyleSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
