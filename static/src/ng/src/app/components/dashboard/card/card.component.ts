import { Component, OnInit, Input } from '@angular/core';

import {Observable} from "rxjs/Observable";

import {PatientData} from "../../../patient-data";

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _patientData: PatientData;
  private titleMap = {
    'hr': 'Heart Rate',
    'med': {
      'med1': 'Medication - med1'
    },
    'water': 'Water',
    'temp': 'Body Temperature',
    'calories': 'Daily Calories'
  };
  private unitMap = {
    'hr': 'bpm',
    'med': {
      'med1': 'pill(s)'
    },
    'water': 'cup(s)',
    'temp': 'F',
    'calories': ''
  };

  @Input()
  set patientData(obs: Observable<PatientData>) {
    //this._patientData = obs.get;

    obs.subscribe(data=>{
      this.update(data);
    });
  }

  update(data: PatientData) {
    this.title = this.titleMap[data.dataType];
    this.unit = this.unitMap[data.dataType];
    this.indicator = data.healthy;

    if (data.dataType === 'med') {
      this.value = data.intVal1.toString();
      this.title = this.titleMap['med'][data.strVal];
      this.unit = this.unitMap['med'][data.strVal];
    }
    else if (data.dataType === 'temp') {
      this.value = data.fltVal1.toFixed(1);
    }
    else {
      this.value = data.intVal1.toString();
    }
  }


  title: string = '';
  value: string = '';
  unit: string = '';
  indicator: number = 0;

  constructor() { }

  ngOnInit() {
  }

  indicatorText(): string {
    if (this.indicator < 0) {
      return 'Below goal';
    }
    else if (this.indicator > 0) {
      return 'Above Maximum';
    }
    else {
      return 'Good';
    }
  }

  indicatorClass() {
    return {
      'text-primary': this.indicator === 0,
      'text-warning': this.indicator < 0,
      'text-danger': this.indicator > 0
    }
  };

}
