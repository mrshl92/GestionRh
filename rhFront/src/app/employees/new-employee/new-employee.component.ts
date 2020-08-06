import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  EmployeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm()
  {
    this.EmployeeForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '',
      etatCivil: '',
      numTeleph: '',
      password: '',
      sexe: '',
      typeContrat: '',
      ville: '',
      matricule: '',
      soldeConge: '',
      status: '',
      dateAjout: '',
      datePriseService: '',
      dateReboursement: ''
    });
  }

  // tslint:disable-next-line:typedef
  onSaveEmployee() {
      this.employeeService.addNewEmployee(this.EmployeeForm.value).subscribe(
        resp =>{
          console.log(resp);
        }
      );
  }
}
