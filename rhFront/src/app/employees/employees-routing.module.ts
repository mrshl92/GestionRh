import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'employee/:id', component: EmployeeDetailsComponent},
  { path: 'employees/new', component: NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
