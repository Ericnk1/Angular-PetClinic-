import {Pet} from './pet';

export class Appointment {
  id: number;
  description: string;
  date: string;
  time: string;
  pet: Pet;
  isActive: boolean;

  constructor(id: number, description: string, date: string, time: string, pet: Pet, isActive: boolean) {
    this.id = id;
    this.description = description;
    this.date = date;
    this.time = time;
    this.pet = pet;
    this.isActive = isActive;
  }
}
