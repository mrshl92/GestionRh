import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../Entities/employee';
import {map} from 'rxjs/operators';

interface GetResponseEmployees {
  _embedded: {
    Employee: Employee[];
  };
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  };
}

interface SetResponseEmployee {

  nom: string;
  prenom: string;
  dateAjout: Date;
  datePriseService: Date;
  dateReboursement: Date;
  email: string;
  etatCivil: string;
  matricule: string;
  numTeleph: number;
  password: string;
  sexe: string;
  soldeConge: number;
  status: number;
  typeContrat: number;
  ville: string;
  dep: string;
  division: {
    idDivision: 1,
    nomDivision: string
  };
  emploiType: {
    idEmploiType: 1,
    nomEmploiType: string
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
    return this.httpClient.post<SetResponseEmployee>('http://localhost:8080/rh/employes', employee);

  }
  getDetailsEmployee(idEmploye: number): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/rh/employes/${idEmploye}`);
  }




}
