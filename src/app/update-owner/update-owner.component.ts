import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../shared/services/owner.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Owner} from '../shared/models/owner';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {

  constructor(private ownerService: OwnerService, private location: Location,
              private formBuilder: FormBuilder) { }

  updateOwnerGroup: FormGroup;

  ngOnInit(): void {
    this.updateOwnerGroup = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      address: '',
      telephoneNumber: '',
      email: ''
    });
  }

  updateOwner(): void {
    const updateOwner = new Owner(null, this.updateOwnerGroup.get('firstName').value,
      this.updateOwnerGroup.get('lastName').value, this.updateOwnerGroup.get('address').value,
      this.updateOwnerGroup.get('telephoneNumber').value, this.updateOwnerGroup.get('email').value, null);
    console.log(updateOwner);
    this.ownerService.updateOwner(updateOwner).subscribe(value => window.location.assign('/owner-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
