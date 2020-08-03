import {Departement} from './departement';

export class Employee {
  private idEmploye: string;
  public nom: string;
  private prenom: string;
  private email: string;
  private etatCivil: string;
  private numTeleph: string;
  private password: string;
  private sexe: string;
  private typeContrat: string;
  private ville: string;

  private soldeConge: number;
  private status: number;

  private dateAjout: Date;
  private datePriseService: Date;
  private dateReboursement: Date;

  private dep : Departement;
}
