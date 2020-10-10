import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../Services/employee.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../Entities/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    id: number;
    employee: Employee;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.OnDetailsEmployee();
  }

// tslint:disable-next-line:typedef
OnDetailsEmployee()
{
  this.id = +this.route.snapshot.paramMap.get('id');
  this.employeeService.getDetailsEmployee(this.id).subscribe(
    resp => {
      this.employee = resp;
      this.employeeService.getDepEmployee(this.id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        response2 => {
          console.log(response2);
          this.employee.dep = response2.nomDepartement;
          console.log(this.employee.dep);
        });
      this.employeeService.getDivEmployee(this.id).subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        response3 => {
          this.employee.division = response3.nomDivision;
          console.log(this.employee.division);
        }
      );
    }
  );

}
}
