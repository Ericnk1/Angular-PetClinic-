import {Owner} from './owner';
import {Appointment} from './appointment';

export class Pet {
  id: number;
  name: string;
  dateOfBirth: Date;
  isVaccinated: string;
  petType: string;
  owner: Owner;
  appointmentList: Appointment[];
  isActive: boolean;


  constructor(id: number, name: string, dateOfBirth: Date, isVaccinated: string, petType: string,
              owner: Owner, appointmentList: Appointment[], isActive: boolean) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.isVaccinated = isVaccinated;
    this.petType = petType;
    this.owner = owner;
    this.appointmentList = appointmentList;
    this.isActive = isActive;
  }
}
