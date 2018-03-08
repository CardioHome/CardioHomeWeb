import { Component, OnInit, ApplicationRef } from '@angular/core';

import {PatientData} from '../patient-data';
import {Observable} from 'rxjs/Rx';
import {PatientDataServiceService} from "../services/patient-data-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private patientDataService = new PatientDataServiceService();
  cards: Observable<PatientData>[];

  private applicationRef: ApplicationRef;

  constructor(applicationRef: ApplicationRef) {
    this.applicationRef = applicationRef;
  }

  ngOnInit() {
    this.cards = this.patientDataService.patientData;
  }

}
