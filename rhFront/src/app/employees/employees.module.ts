import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [NewEmployeeComponent, EmployeeDetailsComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
