import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { PatientDataComponent } from './patient-data/patient-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/home', component: ProfileHomeComponent },
  { path: 'profile/me', component: ProfileComponent },
  { path: 'data/:type', component: PatientDataComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'sensor/list', component: SensorListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
