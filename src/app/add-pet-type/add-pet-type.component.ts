import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PetTypeService} from '../shared/services/pet-type.service';
import {Location} from '@angular/common';
import {PetType} from '../shared/models/petType';

@Component({
  selector: 'app-add-pet-type',
  templateUrl: './add-pet-type.component.html',
  styleUrls: ['./add-pet-type.component.css']
})
export class AddPetTypeComponent implements OnInit {

  constructor(private petTypeService: PetTypeService, private location: Location,
              private formBuilder: FormBuilder) { }
  addPetTypeGroup: FormGroup;

  ngOnInit(): void {
    this.addPetTypeGroup = this.formBuilder.group({
      name: ''
    });
  }
  addPetType(): void {
    const addPetType = new PetType(null, this.addPetTypeGroup.get('name').value,
       null);
    console.log(addPetType);
    this.petTypeService.addPetType(addPetType).subscribe(value => window.location.assign('/petType-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
