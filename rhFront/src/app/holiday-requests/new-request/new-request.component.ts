import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HolidayService} from '../Services/holiday.service';
import {Conge} from '../../employees/Entities/conge';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  holidayForm: FormGroup;
  conge: Conge; valid = false;
  constructor(private holidayFBuilder: FormBuilder, private holidayService: HolidayService) { }

  ngOnInit(): void {
    this.initForm();
  }
  // tslint:disable-next-line:typedef
  initForm()
  {
    this.holidayForm = this.holidayFBuilder.group(
      {
        dateDebut: new FormControl(''),
        dateFin: new FormControl(''),
        typeConge: new FormControl(''),
        raison: new FormControl('', Validators.required)
      }
    );

  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  nbJoursOuverables(dateDebut: string, dateFin: string){
    const dateDebut1 = new Date(dateDebut);
    const dateFin1 = new Date(dateFin);
    return Math.floor((Date.UTC(dateFin1.getFullYear(), dateFin1.getMonth(), dateFin1.getDate()) - Date.UTC(dateDebut1.getFullYear(), dateDebut1.getMonth(), dateDebut1.getDate()) ) / (1000 * 60 * 60 * 24));
  }
  // tslint:disable-next-line:typedef
  onSaveHolidayRequest()
  {
    this.conge = this.holidayForm.value;
    this.conge.status = 0 ;
    this.conge.nbJoursTotal = 30 ;
    if(!this.holidayForm.invalid){
        this.valid = true ;
        this.conge.employee = 'http://localhost:8080/rh/employes/5';
    this.conge.nbJoursOuvrables = this.nbJoursOuverables( this.holidayForm.getRawValue().dateDebut, this.holidayForm.getRawValue().dateFin);
    this.conge.nbJoursTotal = (this.conge.nbJoursTotal - this.conge.nbJoursOuvrables);
    this.holidayService.addNewHolidayRequest(this.conge).subscribe(
      resp => {
          console.log(resp);
      }
    );
    }
  }


}
