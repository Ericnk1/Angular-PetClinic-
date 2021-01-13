import {Owner} from './owner';
import {Vet} from './vet';
import {PetType} from './petType';

export class Pet {
  constructor(id: number, name: string, dateOfBirth: Date, isVaccinated: boolean, petType: PetType,
              owner: Owner, vet: Vet, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.isVaccinated = isVaccinated;
    this.petType = petType;
    this.owner = owner;
    this.vet = vet;
    this.isActive = isActive;
  }
  id: number;
  name: string;
  dateOfBirth: Date;
  isVaccinated: boolean;
  petType: PetType;
  owner: Owner;
  vet: Vet;
  isActive: boolean;
}
