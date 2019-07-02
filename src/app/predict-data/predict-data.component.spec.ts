import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDataComponent } from './predict-data.component';

describe('PredictDataComponent', () => {
  let component: PredictDataComponent;
  let fixture: ComponentFixture<PredictDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
