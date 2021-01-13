import { Component, OnInit } from '@angular/core';
import {PetService} from '../shared/services/pet.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {PetType} from '../shared/models/petType';
import {Owner} from '../shared/models/owner';
import {Vet} from '../shared/models/vet';
import {Pet} from '../shared/models/pet';
import {PetTypeService} from '../shared/services/pet-type.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  petTypes: PetType[];

  constructor(private petService: PetService, private location: Location,
              private formBuilder: FormBuilder, private petTypeService: PetTypeService) { }

  addPetGroup: FormGroup;

  ngOnInit(): void {
    this.petTypeService.getAllActivePetTypes().subscribe(value => this.petTypes = value);
    this.addPetGroup = this.formBuilder.group({
      id: '',
      name: '',
      dateOfBirth: '',
      isVaccinated: '',
      petType: '',
      owner: ''
    });
  }

  addPet(): void {
    const addPet = new Pet(null, this.addPetGroup.get('name').value,
      this.addPetGroup.get('dateOfBirth').value, this.addPetGroup.get('isVaccinated').value,
      this.addPetGroup.get('petType').value, this.addPetGroup.get('owner').value, null, null);
    console.log(addPet);
    this.petService.addPet(addPet).subscribe(value => window.location.assign('/admin'));
  }

  goBack(): void {
    this.location.back();
  }

}
