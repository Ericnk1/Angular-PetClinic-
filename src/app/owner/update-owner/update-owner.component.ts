import { Component, OnInit } from '@angular/core';
import {OwnerService} from '../../shared/services/owner.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Owner} from '../../shared/models/owner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.css']
})
export class UpdateOwnerComponent implements OnInit {

  owner: Owner;

  constructor(private ownerService: OwnerService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder) {
    this.owner = {} as Owner;
  }

  updateOwnerGroup: FormGroup;

  ngOnInit(): void {
    this.owner.id = this.route.snapshot.params.id;
    this.ownerService.getOwnerById(this.owner.id).subscribe(value => this.owner = value);
    console.log(this.owner);
    this.updateOwnerGroup = this.formBuilder.group({
      id: this.owner.id,
      firstName: this.owner.firstName,
      lastName: this.owner.lastName,
      address: this.owner.address,
      telephoneNumber: this.owner.telephoneNumber,
      email: this.owner.email
    });
  }

  /*updateOwner(): void {
    const updateOwner = new Owner(null, this.updateOwnerGroup.get('firstName').value,
      this.updateOwnerGroup.get('lastName').value, this.updateOwnerGroup.get('address').value,
      this.updateOwnerGroup.get('telephoneNumber').value, this.updateOwnerGroup.get('email').value, null);
    console.log(updateOwner);
    this.ownerService.updateOwner(updateOwner.id, updateOwner).subscribe(value => window.location.assign('/owner-list'));
  }*/

  unSubmit(owner: Owner): void {
    this.owner = this.updateOwnerGroup.value;
    console.log(owner);
    this.ownerService.updateOwner(owner.id, owner).subscribe(value => window.location.assign('/owner-list'));
  }

  goBack(): void {
    this.router.navigate(['/owner-list']);
  }

}