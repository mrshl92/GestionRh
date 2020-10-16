import { Component, OnInit } from '@angular/core';
import {HolidayService} from './Services/holiday.service';
import {Conge} from '../employees/Entities/conge';

@Component({
  selector: 'app-holiday-requests',
  templateUrl: './holiday-requests.component.html',
  styleUrls: ['./holiday-requests.component.css']
})
export class HolidayRequestsComponent implements OnInit {
  public conges: Conge[];

  constructor(private holidayService: HolidayService) { }

  ngOnInit(): void {
    this.OnGetHolidayRequests();
  }
  // tslint:disable-next-line:typedef

  OnGetHolidayRequests()
  {
    this.holidayService.getHolidayRequests().subscribe(
      response => {
        this.conges = response._embedded.Conge;
        console.log(this.conges);
        for (let e of this.conges){
          this.holidayService.getEmployeeHRequests(e.idConge).subscribe(
            resp =>{
              e.employee1 = resp;
            }
          );
        }

    }
    );
  }

}
