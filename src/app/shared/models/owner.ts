export class Owner {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  telephoneNumber: string;
  email: string;
  isActive: boolean;

  constructor(id: number, firstName: string, lastName: string, address: string, telephoneNumber: string, email: string, isActive: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.telephoneNumber = telephoneNumber;
    this.email = email;
    this.isActive = isActive;
  }
}
