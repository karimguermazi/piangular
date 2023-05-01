import { Compte } from './Compte';

export class User {
  idUser: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  placeBirth: string;
  job: string;
  gender: string;
  housing: string;
  postalCode: number;
  email: string;
  comptes?: Compte[];
}