import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors = [
    {
      name: 'Heart Rate Sensor',
      online: true,
      last_update: 'just now'
    },
    {
      name: 'Pill Bottle',
      online: false,
      last_update: '3 min ago'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
