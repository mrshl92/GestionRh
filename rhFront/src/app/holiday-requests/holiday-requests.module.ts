import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRequestsRoutingModule } from './holiday-requests-routing.module';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { NewRequestComponent } from './new-request/new-request.component';


@NgModule({
  declarations: [RequestDetailComponent, NewRequestComponent],
  imports: [
    CommonModule,
    HolidayRequestsRoutingModule
  ]
})
export class HolidayRequestsModule { }
