import { Component, OnInit } from '@angular/core';
import {VetService} from '../shared/services/vet.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Vet} from '../shared/models/vet';

@Component({
  selector: 'app-update-vet',
  templateUrl: './update-vet.component.html',
  styleUrls: ['./update-vet.component.css']
})
export class UpdateVetComponent implements OnInit {

  constructor(private vetService: VetService, private location: Location,
              private formBuilder: FormBuilder) { }

  updateVetGroup: FormGroup;

  ngOnInit(): void {
    this.updateVetGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  updateVet(): void {
    const updateVet = new Vet(null, this.updateVetGroup.get('firstName').value,
      this.updateVetGroup.get('lastName').value, this.updateVetGroup.get('email').value, null);
    console.log(updateVet);
    this.vetService.updateVet(updateVet).subscribe(value => window.location.assign('/vet-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
