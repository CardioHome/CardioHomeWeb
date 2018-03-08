import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDataChartComponent } from './patient-data-chart.component';

describe('PatientDataChartComponent', () => {
  let component: PatientDataChartComponent;
  let fixture: ComponentFixture<PatientDataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
