export class Admin {

  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;

  constructor(id: number, firstName: string, lastName: string, email: string, password: string, isActive: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
  }
}
