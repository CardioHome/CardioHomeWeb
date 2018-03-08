import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications = [
    {
      title: 'Heart Rate Alert',
      text: 'You have reached at maximum heart rate of 101 bpm! Please have a rest!',
      time: '3 sec ago',
      isNew: true
    },
    {
      title: 'Heart Rate Alert',
      text: 'You have reached at maximum heart rate of 100 bpm! Please have a rest!',
      time: '3 min ago',
      isNew: false
    },
    {
      title: 'Heart Rate Alert',
      text: 'You have reached at maximum heart rate of 103 bpm! Please have a rest!',
      time: '23 mins ago',
      isNew: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
