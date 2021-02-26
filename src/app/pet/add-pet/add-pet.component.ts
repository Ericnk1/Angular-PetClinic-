import {Component, Input, OnInit} from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {PetType} from '../../shared/models/petType';
import {Owner} from '../../shared/models/owner';
import {Pet} from '../../shared/models/pet';
import {PetTypeService} from '../../shared/services/pet-type.service';
import {IsVaccinatedService} from '../../shared/services/is-vaccinated.service';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  pet: Pet;
  petTypes: PetType[];
  isVaccinated: string[];
  newOwner: Owner;
  @Input() newPetType: PetType;

  constructor(private petService: PetService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private petTypeService: PetTypeService,
              private ownerService: OwnerService, private isVaccinatedService: IsVaccinatedService) {
    this.pet = {} as Pet;
    this.newOwner = {} as Owner;
    this.newPetType = {} as PetType;
    this.petTypes = [];
  }

  addOwnerGroup: FormGroup;
  addPetGroup: FormGroup;

  ngOnInit(): void {
    this.isVaccinatedService.getIsVaccinated().subscribe(value => this.isVaccinated = value);
    this.petTypeService.getAllActivePetTypes().subscribe(value => this.petTypes = value);
    this.addOwnerGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      telephoneNumber: '',
      email: ''
    });
    this.addPetGroup = this.formBuilder.group({
      id: '',
      name: '',
      dateOfBirth: '',
      isVaccinated: '',
      petType: ''
    });
  }


  /*addOwner(): void {
    this.newOwner = this.addOwnerGroup.value;
    console.log(this.newOwner);
  }*/

  addPet(pet: Pet): void {
    this.newOwner = this.addOwnerGroup.value;
    pet.id = null;
    pet.owner = this.newOwner;
    // pet.dateOfBirth = this.pet.dateOfBirth;
    this.pet = this.addPetGroup.value;
    console.log(pet);
    this.petService.addPet(pet).subscribe(value => window.location.assign('/pet-list'));
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
