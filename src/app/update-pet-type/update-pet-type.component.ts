import { Component, OnInit } from '@angular/core';
import {PetTypeService} from '../shared/services/pet-type.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PetType} from '../shared/models/petType';

@Component({
  selector: 'app-update-pet-type',
  templateUrl: './update-pet-type.component.html',
  styleUrls: ['./update-pet-type.component.css']
})
export class UpdatePetTypeComponent implements OnInit {

  constructor(private petTypeService: PetTypeService, private location: Location,
              private formBuilder: FormBuilder) { }
  updatePetTypeGroup: FormGroup;

  ngOnInit(): void {
    this.updatePetTypeGroup = this.formBuilder.group({
      name: ''
    });
  }
  updatePetType(): void {
    const updatePetType = new PetType(null, this.updatePetTypeGroup.get('name').value,
      null);
    console.log(updatePetType);
    this.petTypeService.updatePetType(updatePetType).subscribe(value => window.location.assign('/petType-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
