import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HolidayRequestsRoutingModule } from './holiday-requests-routing.module';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { NewRequestComponent } from './new-request/new-request.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RequestDetailComponent, NewRequestComponent],
  imports: [
    CommonModule,
    HolidayRequestsRoutingModule,
    ReactiveFormsModule
  ]
})
export class HolidayRequestsModule { }
