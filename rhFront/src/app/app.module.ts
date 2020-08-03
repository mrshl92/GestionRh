import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {EmployeesComponent} from './employees/employees.component';
import {HomeComponent} from './home/home.component';
import {HolidayRequestsComponent} from './holiday-requests/holiday-requests.component';
import {MessagesComponent} from './messages/messages.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {AttestationRequestsComponent} from './attestation-requests/attestation-requests.component';
import {NewAttestationComponent} from './attestation-requests/new-attestation/new-attestation.component';
import {AttestationDetailComponent} from './attestation-requests/attestation-detail/attestation-detail.component';
import {EmployeesModule} from './employees/employees.module';
import {AttestationRequestsModule} from './attestation-requests/attestation-requests.module';
import {HolidayRequestsModule} from './holiday-requests/holiday-requests.module';



const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'attestationrequests' , component: AttestationRequestsComponent},
  {path: 'holidayrequests' , component: HolidayRequestsComponent},
  {path: 'home' , component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }


];

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    HolidayRequestsComponent,
    MessagesComponent,
    NotificationsComponent,
    AttestationRequestsComponent,
    NewAttestationComponent,
    AttestationDetailComponent
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AttestationRequestsModule,
    HolidayRequestsModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
