import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ab1Component } from './ab1.component';

describe('Ab1Component', () => {
  let component: Ab1Component;
  let fixture: ComponentFixture<Ab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ab1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
