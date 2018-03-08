import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {$WebSocket} from 'angular2-websocket/angular2-websocket'

import {PatientData} from "../patient-data";

@Injectable()
export class PatientDataServiceService {
  patientData: Observable<PatientData>[] = [];
  private _patientData = {};
  private ws = new $WebSocket("ws://" + document.location.hostname + ":9010" + "/patient_data");
  private _initData: PatientData[] = [
    {id: 0, createTime: '', dataType: 'hr', intVal1: 100, healthy:0},
    {id: 0, createTime: '', dataType: 'med', intVal1: 2, strVal: 'med1', healthy:0},
    {id: 0, createTime: '', dataType: 'water', intVal1: 4, healthy:-1},
    {id: 0, createTime: '', dataType: 'temp', fltVal1: 98.2, healthy:0},
    {id: 0, createTime: '', dataType: 'calories', intVal1: 100, healthy:-1},
  ];

  constructor() {
    this._initData.forEach(item=>{
      const sub = new BehaviorSubject(new PatientData());
      this._patientData[item.dataType] = sub;
      sub.next(item);

      this.patientData.push(sub.asObservable());
    });
    this.mockUpdate();

    this.ws.onMessage(msg=>{
      this._initData.forEach(data=>{
        if (data.dataType === 'hr') {
          // data.intVal1 += Math.round((Math.random() - 0.5) * 10);
          // data.intVal1 = Math.max(Math.min(data.intVal1, 110), 90);
          data.intVal1 = JSON.parse(msg.data).hr;
          data.healthy = data.intVal1 > 100 ? 1: 0;
          this._patientData['hr'].next(data);
        }
      });
    }, {autoApply: false});
    this.ws.send('"hello"').publish().connect();
  }

  mockUpdate() {
    // Observable.timer(500, 5000).subscribe(t=> {
    //
    // });

    // setInterval(()=>{
    //   this.cards.forEach(card=>{
    //     if (card.dataType === 'body temp') {
    //       card.fltVal1 += (Math.random() - 0.5) * 0.2
    //     }
    //   });
    // }, 500);
    // setInterval(()=>{
    //   this.cards.forEach(card=>{
    //     if (card.dataType === 'calories') {
    //       card.intVal1 += Math.random() * 30
    //     }
    //   });
    // }, 10000);
  }

}
