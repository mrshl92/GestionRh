import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees.component';
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {NewEmployeeComponent} from './new-employee/new-employee.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent},
  { path: 'employees/details/:id', component: EmployeeDetailsComponent},
  { path: 'employees/new', component: NewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
