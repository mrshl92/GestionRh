import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../Services/holiday.service';
import {Conge} from '../../employees/Entities/conge';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  conge: Conge;
  id: number;
  holidayDetailsForm: FormGroup;
  constructor(private holidayService: HolidayService, private  route: ActivatedRoute, private HDFBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.OnGetHolidayRequests();
  }
  initForm()
  {
    this.holidayDetailsForm = this.HDFBuilder.group({
      raison: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  OnGetHolidayRequests()
  {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.holidayService.getCongeRequestDetails(this.id).subscribe(
      response => {
        console.log(response);
        this.conge = response;
      });
    this.holidayService.getEmployeeHRequests(this.id).subscribe(
      resp =>{
        this.conge.employee1 = resp;
      });
  }
}
