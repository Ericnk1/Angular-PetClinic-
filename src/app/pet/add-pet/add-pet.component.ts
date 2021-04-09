import {Component, Input, OnInit} from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {Owner} from '../../shared/models/owner';
import {Pet} from '../../shared/models/pet';
import {IsVaccinatedService} from '../../shared/services/is-vaccinated.service';
import {OwnerService} from '../../shared/services/owner.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {TypesService} from '../../shared/services/types.service';
import {valueReferenceToExpression} from '@angular/compiler-cli/src/ngtsc/annotations/src/util';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  pet: Pet;
  isVaccinated: string[];
  types: string[];
  newOwner: Owner;

  constructor(private petService: PetService, private location: Location, private typesService: TypesService,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder,
              private ownerService: OwnerService, private isVaccinatedService: IsVaccinatedService) {
    this.pet = {} as Pet;
    this.newOwner = {} as Owner;
  }

  addOwnerGroup: FormGroup;
  addPetGroup: FormGroup;

  ngOnInit(): void {
    const ownerId = this.route.snapshot.params.id;
    this.ownerService.getOwnerById(ownerId).subscribe(
      response => {
        this.newOwner = response;
        console.log(this.newOwner);
      });
    this.isVaccinatedService.getIsVaccinated().subscribe(value => this.isVaccinated = value);
    this.typesService.getPetTypes().subscribe(value => this.types = value);
    /*this.addOwnerGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      telephoneNumber: '',
      email: ''
    });*/
    this.addPetGroup = this.formBuilder.group({
      id: '',
      name: '',
      dateOfBirth: '',
      isVaccinated: '',
      petType: '',
      owner: Object.values(this.newOwner).push(this.pet)
    });
  }


  /*addOwner(): void {
    this.newOwner = this.addOwnerGroup.value;
    console.log(this.newOwner);
  }*/

  addPet(): void {
    this.pet.id = null;
    this.pet.owner = this.newOwner;
    this.pet.dateOfBirth = new Date(this.pet.dateOfBirth);
    this.pet = this.addPetGroup.value;
    console.log(this.pet);
    this.petService.addPet(this.pet).subscribe(value => window.location.assign('/pet-list'));
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
