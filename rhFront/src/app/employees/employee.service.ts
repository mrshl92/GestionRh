import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {map} from 'rxjs/operators';

interface GetResponseEmployees {
  _embedded: {
    Employee: Employee[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private EmployeesUrl = 'http://localhost:8080/rh/employes';
  constructor(private httpClient: HttpClient) { }

   getEmployees(EmployeesUrl: string): Observable<any> {
    return this.httpClient.get<any>(EmployeesUrl);
  }




}
