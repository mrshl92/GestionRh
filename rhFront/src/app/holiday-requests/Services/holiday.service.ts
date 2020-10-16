import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Conge} from '../../employees/Entities/conge';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private httpClient: HttpClient) { }

  addNewHolidayRequest(conge: Conge): Observable<any>
  {
    return this.httpClient.post<any>('http://localhost:8080/rh/conges', conge);
  }
  getHolidayRequests(): Observable<any>
  {
    return this.httpClient.get<any>('http://localhost:8080/rh/conges');
  }
  getEmployeeHRequests(id : number): Observable<any>
  {
    return this.httpClient.get<any>(`http://localhost:8080/rh/conges/${id}/employee`);
  }
  getCongeRequestDetails(id: number): Observable<any>
  {
    return this.httpClient.get<any>(`http://localhost:8080/rh/conges/${id}`);
  }
}
