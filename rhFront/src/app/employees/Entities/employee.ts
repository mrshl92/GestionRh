import {Departement} from './departement';
import {Division} from './division';

export class Employee {

  constructor(  public idEmploye: number,
                public nom: string,
                public prenom: string,
                public email: string,
                public etatCivil: string,
                public numTeleph: string,
                public password: string,
                public sexe: string,
                public typeContrat: string,
                public ville: string,
                public matricule: string,
                public soldeConge: number,
                public status: number,

                public dateAjout: Date,
                public datePriseService: Date,
                public dateReboursement: Date,
                public dep: Departement,
                public division: Division
                ) {
  }

}
