import {Component, OnInit, ViewChild} from '@angular/core';
import {PetTypeService} from '../../shared/services/pet-type.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetType} from '../../shared/models/petType';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-pet-type',
  templateUrl: './update-pet-type.component.html',
  styleUrls: ['./update-pet-type.component.css']
})
export class UpdatePetTypeComponent implements OnInit {

  petType: PetType;
  petTypeId: number;
  @ViewChild('petType') PetType;

  constructor(private petTypeService: PetTypeService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.petType = {} as PetType;
  }
  updatePetTypeGroup: FormGroup;

  ngOnInit(): void {
    this.petType.id = this.route.snapshot.params.id;
    console.log(this.petType.id);
    this.petTypeService.getPetTypeById(this.petType.id).subscribe(value => {
      this.petType = value;
      console.log(this.petType);
      this.updatePetTypeGroup.setValue(this.petType);
    });
    console.log(this.petType);
    this.updatePetTypeGroup = this.formBuilder.group({
      id: new FormControl(this.petType.id, Validators.required),
      name: new FormControl(this.petType.name, Validators.required)
    });
  }
  updatePetType(petType: PetType): void {
    this.petType = this.updatePetTypeGroup.value;
    console.log(petType);
    this.petTypeService.updatePetType(petType.id, petType).subscribe(value => window.location.assign('/petType-list'));
  }

  goBack(): void {
    this.router.navigate(['/petType-list']);
  }

}
