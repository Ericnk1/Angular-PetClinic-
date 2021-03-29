import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {PetType} from '../../shared/models/petType';
import {Owner} from '../../shared/models/owner';
import {PetService} from '../../shared/services/pet.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetTypeService} from '../../shared/services/pet-type.service';
import {OwnerService} from '../../shared/services/owner.service';
import {IsVaccinatedService} from '../../shared/services/is-vaccinated.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {

  displayedColumnsPet: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner'];

  dataSourcePet;
  pet: Pet;
  petTypes: PetType[];
  isVaccinated: string[];
  owner: Owner;
  @Input() newPetType: PetType;

  constructor(private petService: PetService, private location: Location,
              private route: ActivatedRoute, private router: Router,
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
    this.pet.id = this.route.snapshot.params.id;
    this.petService.getPetById(this.pet.id).subscribe(value => {
      this.pet = value;
      console.log(value);
      this.updatePetGroup.setValue(this.pet);
      this.updateOwnerGroup.setValue(this.pet.owner);
    });
    this.isVaccinatedService.getIsVaccinated().subscribe(value => this.isVaccinated = value);
    this.petTypeService.getAllActivePetTypes().subscribe(value => this.petTypes = value);
    this.updateOwnerGroup = this.formBuilder.group({
      id: new FormControl(this.pet.owner.id, Validators.required),
      firstName: new FormControl(this.pet.owner.firstName, Validators.required),
      lastName: new FormControl(this.pet.owner.lastName, Validators.required),
      address: new FormControl(this.pet.owner.address, Validators.required),
      telephoneNumber: new FormControl(this.pet.owner.telephoneNumber, Validators.required),
      email: new FormControl(this.pet.owner.email, Validators.required)
    });
    this.updatePetGroup = this.formBuilder.group({
      id: new FormControl(this.pet.id, Validators.required),
      name: new FormControl(this.pet.name, Validators.required),
      dateOfBirth: new FormControl(this.pet.dateOfBirth, Validators.required),
      petType: new FormControl(this.pet.petType, Validators.required)
    });
  }

  updatePet(): void {
    this.owner = this.updateOwnerGroup.value;
    this.pet.owner = this.owner;
    this.pet.dateOfBirth = new Date(this.pet.dateOfBirth);
    this.pet = this.updatePetGroup.value;
    console.log(this.pet);
    this.petService.updatePet(this.pet.id, this.pet).subscribe(value => window.location.assign('/pet-list'));
  }

  goBack(): void {
    this.router.navigate(['/pet-list']);
  }

}
