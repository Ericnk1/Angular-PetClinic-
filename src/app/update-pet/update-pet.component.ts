import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../shared/models/pet';
import {PetType} from '../shared/models/petType';
import {Owner} from '../shared/models/owner';
import {PetService} from '../shared/services/pet.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PetTypeService} from '../shared/services/pet-type.service';
import {OwnerService} from '../shared/services/owner.service';
import {IsVaccinatedService} from '../shared/services/is-vaccinated.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {

  displayedColumnsPet: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner'];

  dataSourcePet = null;
  pet: Pet;
  petTypes: PetType[];
  isVaccinated: string[];
  owner: Owner;
  @Input() newPetType: PetType;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private location: Location,
              private formBuilder: FormBuilder, private petTypeService: PetTypeService,
              private ownerService: OwnerService, private isVaccinatedService: IsVaccinatedService) {
    this.pet = {} as Pet;
    this.owner = {} as Owner;
    this.newPetType = {} as PetType;
    this.petTypes = [];
  }

  updateOwnerGroup: FormGroup;
  updatePetGroup: FormGroup;

  ngOnInit(): void {
    /*this.petService.getPetById().subscribe(value => {
      this.pet = value;
      console.log(value);
      this.dataSourcePet = new MatTableDataSource(this.pet);
      this.dataSourcePet.sort = this.sort;
    });*/
    this.isVaccinatedService.getIsVaccinated().subscribe(value => this.isVaccinated = value);
    this.petTypeService.getAllActivePetTypes().subscribe(value => this.petTypes = value);
    this.updateOwnerGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      telephoneNumber: '',
      email: ''
    });
    this.updatePetGroup = this.formBuilder.group({
      id: '',
      name: '',
      dateOfBirth: '',
      isVaccinated: '',
      petType: ''
    });
  }

  updatePet(pet: Pet): void {
    this.owner = this.updateOwnerGroup.value;
    pet.id = null;
    pet.owner = this.owner;
    // pet.dateOfBirth = this.pet.dateOfBirth;
    this.pet = this.updatePetGroup.value;
    console.log(pet);
    this.petService.updatePet(pet).subscribe(value => window.location.assign('/pet-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
