import {Component, OnInit, ViewChild} from '@angular/core';
import {PetService} from '../shared/services/pet.service';
import {VetService} from '../shared/services/vet.service';
import {PetTypeService} from '../shared/services/pet-type.service';
import {OwnerService} from '../shared/services/owner.service';
import {AppointmentService} from '../shared/services/appointment.service';
import {Pet} from '../shared/models/pet';
import {Vet} from '../shared/models/vet';
import {Owner} from '../shared/models/owner';
import {PetType} from '../shared/models/petType';
import {Appointment} from '../shared/models/appointment';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pet: Pet;
  vet: Vet;
  owner: Owner;
  petType: PetType;
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
  }

}
