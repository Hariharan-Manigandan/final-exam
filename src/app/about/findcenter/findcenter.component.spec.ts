import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcenterComponent } from './findcenter.component';

describe('FindcenterComponent', () => {
  let component: FindcenterComponent;
  let fixture: ComponentFixture<FindcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
