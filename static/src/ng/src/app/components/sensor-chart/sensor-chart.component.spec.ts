import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorChartComponent } from './sensor-chart.component';

describe('SensorChartComponent', () => {
  let component: SensorChartComponent;
  let fixture: ComponentFixture<SensorChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
