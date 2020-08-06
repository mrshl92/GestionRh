import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../Entities/employee';
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
  constructor(private httpClient: HttpClient) { }

   getEmployees(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/rh/employes');
  }
  getDepEmployee(idEmploye: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/rh/employes/${idEmploye}/dep`);
  }
  getDivEmployee(idEmploye: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/rh/employes/${idEmploye}/division`);
  }
  addNewEmployee(employee: Employee): Observable<any>{
    return this.httpClient.post('http://localhost:8080/rh/employes', employee);
  }




}
