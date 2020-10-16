import {Employee} from './employee';
import {ResponseConge} from './response-conge';

export class Conge {
  public idConge: number;
  public nbJoursOuvrables: number;
  private _nbJoursTotal:number = 30;
  public status: number;
  // tslint:disable-next-line:ban-types
  public raison: string;
  public typeConge: string;
  public dateDebut: Date;
  public dateFin: Date;
  public dateDemande: Date;
  public employee1: Employee;
  public employee: string;
  public responseConge: ResponseConge;


  get nbJoursTotal(): number {
    return this._nbJoursTotal;
  }

  set nbJoursTotal(value: number) {
    this._nbJoursTotal = value;
  }
}
