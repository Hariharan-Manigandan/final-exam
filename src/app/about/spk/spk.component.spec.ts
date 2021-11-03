import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkComponent } from './spk.component';

describe('SpkComponent', () => {
  let component: SpkComponent;
  let fixture: ComponentFixture<SpkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
