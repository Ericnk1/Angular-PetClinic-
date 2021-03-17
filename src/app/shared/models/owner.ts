import {Pet} from './pet';

export class Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  telephoneNumber: string;
  email: string;
  pets: Pet[];
  isActive: boolean;


  constructor(id: number, firstName: string, lastName: string, address: string,
              telephoneNumber: string, email: string, pets: Pet[], isActive: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.telephoneNumber = telephoneNumber;
    this.email = email;
    this.pets = pets;
    this.isActive = isActive;
  }
}
