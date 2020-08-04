import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from './Entities/employee';
import {EmployeeService} from './Services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  private EmployeesUrl = 'http://localhost:8080/rh/employes';
  public employees: Employee[];
  public departementName: string[];
  constructor(private httpClient: HttpClient, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.OngetEmployees();
  }
  // tslint:disable-next-line:typedef
  OngetEmployees()
  {
      this.employeeService.getEmployees().subscribe(
        response1 => {
          this.employees = response1._embedded.Employee;
          console.log(this.employees);
          for(let emp of this.employees)
          {
            this.employeeService.getDepEmployee(emp.idEmploye).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              response2 => {
                console.log(response2);
                emp.dep = response2.nomDepartement;
                console.log(emp.dep);
              }
            );
            this.employeeService.getDivEmployee(emp.idEmploye).subscribe(
              // tslint:disable-next-line:no-shadowed-variable
              response3 => {
                emp.division = response3.nomDivision;
                console.log(emp.division);
              }
            );

          }
          }
      );
  }



}
