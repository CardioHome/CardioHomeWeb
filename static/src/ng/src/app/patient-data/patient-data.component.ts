import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, NavigationStart, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { ISubscription } from "rxjs/Subscription";

import * as c3 from 'c3';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit, OnDestroy {
  chart: any;
  private subscription: ISubscription;

  constructor(
    private route: ActivatedRoute,
    private rt: Router,
    private location: Location
  ) {

    this.subscription = rt.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.chart.distroy();
      }
      else if (event instanceof NavigationEnd){
        this.update();
      }
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  update() {
    let dataType = this.route.snapshot.paramMap.get('type');
    let hrData = [
      ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
      ['Heart Rate', 89, 80, 90, 100, 110, 99]
    ];
    let medData = [
      ['x', '2018-01-01', '2018-01-02', '2018-01-03', '2018-01-04', '2018-01-05', '2018-01-06'],
      ['Med1', 3, 3, 3, 4, 3, 2],
      ['Med2', 6, 6, 5, 6, 5, 6],
      ['Water', 8, 8, 9, 7, 8, 10]
    ];

    this.chart = c3.generate({
      bindto: '#data-chart',
        data: {
          x: 'x',
          columns: dataType === 'hr' ? hrData : medData,
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              format: '%Y-%m-%d'
            }
          }
        },
        grid: {
          y: {
            lines: [
              {value: dataType === 'hr' ? 100 : 9, text: 'Alert Line', 'class': 'text-danger'}
            ]
          }
        }
    });
  }
}
