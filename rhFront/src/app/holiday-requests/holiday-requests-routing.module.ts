import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HolidayRequestsComponent} from './holiday-requests.component';
import {NewRequestComponent} from './new-request/new-request.component';
import {RequestDetailComponent} from './request-detail/request-detail.component';

const routes: Routes = [
  {path: 'holidayrequests' , component: HolidayRequestsComponent},
  {path: 'holidayrequests/new', component: NewRequestComponent},
  {path: 'holidayrequest/:id', component: RequestDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HolidayRequestsRoutingModule { }
