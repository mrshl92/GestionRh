import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../Services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  EmployeeForm: FormGroup;
  Dept;div;
  isValid = false;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.initForm();
    console.log(this.Dept);
  }
  // tslint:disable-next-line:typedef
  initForm()
  {
    this.EmployeeForm = this.formBuilder.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      etatCivil: new FormControl(''),
      numTeleph: new FormControl('', [Validators.required, Validators.pattern( '^((\\\\+91-?)|0)?[0-9]{10}$')]),
      password: new FormControl('', [Validators.required]),
      sexe: new FormControl(''),
      dep: new FormControl(''),
      division: new FormControl(''),
      nomEmploiType: new FormControl(''),
      typeContrat: new FormControl(''),
      ville: new FormControl(''),
      matricule: new FormControl('', Validators.required),
      soldeConge: new FormControl('', ),
      status: new FormControl(''),
      datePriseService: new FormControl(''),
      dateReboursement: new FormControl('')
    });
  }
  // tslint:disable-next-line:typedef
  patchDepartement()
  {
    if (this.Dept === 'd1'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/1'}));
    }else if(this.Dept === 'd2'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/2'}));
    }else if(this.Dept === 'd3'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/3'}));
    }else if(this.Dept === 'd4'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/4'}));
    }else if(this.Dept === 'd5'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/5'}));
    }else if(this.Dept === 'd6'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/6'}));
    }else if(this.Dept === 'd7'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/7'}));
    }else if(this.Dept === 'd8'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/8'}));
    }else if(this.Dept === 'd9'){
      this.EmployeeForm.patchValue(({dep: 'http://localhost:8080/rh/departements/9'}));
    }
  }
  patchDivision(){
    if (this.div === 'di1'){
      this.EmployeeForm.patchValue(({division: 'http://localhost:8080/rh/divisions/1'}));
    }else if(this.div === 'di2'){
      this.EmployeeForm.patchValue(({division: 'http://localhost:8080/rh/divisions/2'}));
    }else if(this.div === 'di3'){
      this.EmployeeForm.patchValue(({division: 'http://localhost:8080/rh/divisions/3'}));
    }
  }
  // tslint:disable-next-line:typedef
  onSaveEmployee() {
    if (!this.EmployeeForm.invalid)
    {
      this.patchDepartement();
      this.patchDivision();
      this.employeeService.addNewEmployee(this.EmployeeForm.value).subscribe(
        resp => {
          console.log(resp);
        }
      );
      this.isValid = true;
      this.EmployeeForm.reset();
    }
    return;
  }
}
