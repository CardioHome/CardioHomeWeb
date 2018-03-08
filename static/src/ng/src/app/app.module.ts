import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/dashboard/card/card.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SensorChartComponent } from './components/sensor-chart/sensor-chart.component';
import { SensorListComponent } from './sensor-list/sensor-list.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientDataChartComponent } from './components/patient-data/patient-data-chart/patient-data-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    NotificationComponent,
    ProfileComponent,
    SensorChartComponent,
    SensorListComponent,
    ProfileHomeComponent,
    PatientDataComponent,
    DashboardComponent,
    PatientDataChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
