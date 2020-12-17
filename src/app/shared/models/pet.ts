import {Owner} from './owner';
import {Vet} from './vet';
import {PetType} from './petType';

export class Pet {
  id: number;
  name: string;
  dateOfBirth: string;
  isVaccinated: boolean;
  petType: PetType;
  owner: Owner;
  vet: Vet;
  isActive: boolean;

  constructor(id: number, name: string, dateOfBirth: string, isVaccinated: boolean,
              petType: PetType, owner: Owner, vet: Vet, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.isVaccinated = isVaccinated;
    this.petType = petType;
    this.owner = owner;
    this.vet = vet;
    this.isActive = isActive;
  }
}
