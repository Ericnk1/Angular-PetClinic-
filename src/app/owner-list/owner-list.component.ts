import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../shared/models/pet';
import {Vet} from '../shared/models/vet';
import {Owner} from '../shared/models/owner';
import {PetType} from '../shared/models/petType';
import {Appointment} from '../shared/models/appointment';
import {MatSort} from '@angular/material/sort';
import {PetService} from '../shared/services/pet.service';
import {VetService} from '../shared/services/vet.service';
import {PetTypeService} from '../shared/services/pet-type.service';
import {OwnerService} from '../shared/services/owner.service';
import {AppointmentService} from '../shared/services/appointment.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  displayedColumnsActiveOwner: string[] = ['id', 'firstName', 'lastName', 'address', 'telephoneNumber', 'email', 'button'];
  dataSourceActiveOwner = null;

  displayedColumnsOwnerAll: string[] = ['id', 'firstName', 'lastName', 'address', 'telephoneNumber', 'email', 'button'];
  dataSourceOwnerAll = null;

  pet: Pet;
  vet: Vet;
  owners: Owner[];
  owner: Owner;
  petType: PetType;
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private vetService: VetService, private location: Location,
              private petTypeService: PetTypeService, private ownerService: OwnerService,
              private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.ownerService.getAllActiveOwners().subscribe(value => {
      this.owners = value;
      console.log(value);
      this.dataSourceActiveOwner = new MatTableDataSource(this.owners);
      this.dataSourceActiveOwner.sort = this.sort;
    });
    this.ownerService.getAllOwners().subscribe(value => {
      this.owners = value;
      console.log(value);
      this.dataSourceOwnerAll = new MatTableDataSource(this.owners);
      this.dataSourceOwnerAll.sort = this.sort;
    });
  }

  deleteOwner(id: number): void {
    this.ownerService.deleteOwnerById(id).subscribe(value => window.location.assign('/admin'));
  }
  restoreOwner(id: number): void {
    this.ownerService.restoreOwner(id).subscribe(value => window.location.assign('/admin'));
  }
  updateOwner(): void {
    this.router.navigate(['/update-owner', this.owner.id]);
  }

  goBack(): void {
    this.location.back();
  }

}
