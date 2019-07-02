import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictOutputComponent } from './predict-output.component';

describe('PredictOutputComponent', () => {
  let component: PredictOutputComponent;
  let fixture: ComponentFixture<PredictOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
