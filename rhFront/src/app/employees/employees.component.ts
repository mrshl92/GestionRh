import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private EmployeesUrl = 'http://localhost:8080/rh/employes';
  private DepartementUrl = 'http://localhost:8080/rh/employes/3/dep';
  public employees: Employee[] =  [];
  public departementName: string;
  constructor(private httpClient: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.OngetEmployees();
  }
  // tslint:disable-next-line:typedef
  OngetEmployees()
  {
      this.employeeService.getEmployees(this.EmployeesUrl).subscribe(
        response => {
          this.employees = response._embedded.Employee;
          }
      );
      this.employeeService.getEmployees(this.DepartementUrl).subscribe(
      response => {
        this.departementName = response.nomDepartement;
      }
    );
  }

}
