import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {VetService} from '../shared/services/vet.service';
import {Vet} from '../shared/models/vet';

@Component({
  selector: 'app-add-vet',
  templateUrl: './add-vet.component.html',
  styleUrls: ['./add-vet.component.css']
})
export class AddVetComponent implements OnInit {

  constructor(private vetService: VetService, private location: Location,
              private formBuilder: FormBuilder) { }

  addVetGroup: FormGroup;

  ngOnInit(): void {
    this.addVetGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  addVet(): void {
    const addVet = new Vet(null, this.addVetGroup.get('firstName').value,
      this.addVetGroup.get('lastName').value, this.addVetGroup.get('email').value, null);
    console.log(addVet);
    this.vetService.addVet(addVet).subscribe(value => window.location.assign('/vet-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
