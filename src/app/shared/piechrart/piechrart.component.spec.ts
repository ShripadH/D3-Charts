import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechrartComponent } from './piechrart.component';

describe('PiechrartComponent', () => {
  let component: PiechrartComponent;
  let fixture: ComponentFixture<PiechrartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechrartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechrartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
