import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/services/owner.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';
import {Owner} from '../shared/models/owner';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService, private location: Location,
              private formBuilder: FormBuilder) { }

  addOwnerGroup: FormGroup;

  ngOnInit(): void {
    this.addOwnerGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      telephoneNumber: '',
      email: ''
    });
  }

  addOwner(): void {
    const addOwner = new Owner(null, this.addOwnerGroup.get('firstName').value,
      this.addOwnerGroup.get('lastName').value, this.addOwnerGroup.get('address').value,
      this.addOwnerGroup.get('telephoneNumber').value, this.addOwnerGroup.get('email').value, null);
    console.log(addOwner);
    this.ownerService.addOwner(addOwner).subscribe(value => window.location.assign('/admin'));
  }

  goBack(): void {
    this.location.back();
  }
}
