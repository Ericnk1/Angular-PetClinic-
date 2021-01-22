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
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumnsActiveVet: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  displayedColumnsActivePet: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner', 'button'];
  displayedColumnsActiveOwner: string[] = ['id', 'firstName', 'lastName', 'address', 'telephoneNumber', 'email', 'button'];
  displayedColumnsActivePetType: string[] = ['id', 'name', 'button'];
  displayedColumnsActiveAppointment: string[] = ['id', 'description', 'date', 'time', 'pet', 'button'];
  dataSourceActiveVet = null;
  dataSourceActivePet = null;
  dataSourceActiveOwner = null;
  dataSourceActivePetType = null;
  dataSourceActiveAppointment = null;

  displayedColumnsVetAll: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  displayedColumnsPetAll: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner', 'button'];
  displayedColumnsOwnerAll: string[] = ['id', 'firstName', 'lastName', 'address', 'telephoneNumber', 'email', 'button'];
  displayedColumnsPetTypeAll: string[] = ['id', 'name', 'button'];
  displayedColumnsAppointmentAll: string[] = ['id', 'description', 'date', 'time', 'pet', 'button'];
  dataSourceVetAll = null;
  dataSourcePetAll = null;
  dataSourceOwnerAll = null;
  dataSourcePetTypeAll = null;
  dataSourceAppointmentAll = null;

  pets: Pet[];
  vets: Vet[];
  owners: Owner[];
  petTypes: PetType[];
  appointments: Appointment[];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private vetService: VetService,
              private petTypeService: PetTypeService, private ownerService: OwnerService,
              private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.vetService.getAllActiveVets().subscribe(value => {
      this.vets = value;
      console.log(value);
      this.dataSourceActiveVet = new MatTableDataSource(this.vets);
      this.dataSourceActiveVet.sort = this.sort;
    });
    this.vetService.getAllVets().subscribe(value => {
      this.vets = value;
      console.log(value);
      this.dataSourceVetAll = new MatTableDataSource(this.vets);
      this.dataSourceVetAll.sort = this.sort;
    });
    this.petService.getAllActivePets().subscribe(value => {
      this.pets = value;
      console.log(value);
      this.dataSourceActivePet = new MatTableDataSource(this.pets);
      this.dataSourceActivePet.sort = this.sort;
    });
    this.petService.getAllPets().subscribe(value => {
      this.pets = value;
      console.log(value);
      this.dataSourcePetAll = new MatTableDataSource(this.pets);
      this.dataSourcePetAll.sort = this.sort;
    });
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
    this.petTypeService.getAllActivePetTypes().subscribe(value => {
      this.petTypes = value;
      console.log(value);
      this.dataSourceActivePetType = new MatTableDataSource(this.petTypes);
      this.dataSourceActivePetType.sort = this.sort;
    });
    this.petTypeService.getAllPetTypes().subscribe(value => {
      this.petTypes = value;
      console.log(value);
      this.dataSourcePetTypeAll = new MatTableDataSource(this.petTypes);
      this.dataSourcePetTypeAll.sort = this.sort;
    });
    this.appointmentService.getAllActiveAppointments().subscribe(value => {
      this.appointments = value;
      console.log(value);
      this.dataSourceActiveAppointment = new MatTableDataSource(this.appointments);
      this.dataSourceActiveAppointment.sort = this.sort;
    });
    this.appointmentService.getAllAppointments().subscribe(value => {
      this.appointments = value;
      console.log(value);
      this.dataSourceAppointmentAll = new MatTableDataSource(this.appointments);
      this.dataSourceAppointmentAll.sort = this.sort;
    });
  }

  deleteVet(id: number): void {
    this.vetService.deleteVetById(id).subscribe(value => window.location.assign('/admin'));
  }
  restoreVet(id: number): void {
    this.vetService.restoreVet(id).subscribe(value => window.location.assign('/admin'));
  }
  /*update(): void {
    this.router.navigate(['/update-vet', this.vet]);
  }*/

  deletePet(id: number): void {
    this.petService.deletePetById(id).subscribe(value => window.location.assign('/admin'));
  }
  restorePet(id: number): void {
    this.petService.restorePet(id).subscribe(value => window.location.assign('/admin'));
  }
  /*update(): void {
    this.router.navigate(['/update-pet', this.pet]);
  }*/

  deleteOwner(id: number): void {
    this.ownerService.deleteOwnerById(id).subscribe(value => window.location.assign('/admin'));
  }
  restoreOwner(id: number): void {
    this.ownerService.restoreOwner(id).subscribe(value => window.location.assign('/admin'));
  }
  /*update(): void {
    this.router.navigate(['/update-owner', this.owner]);
  }*/

  deletePetType(id: number): void {
    this.petTypeService.deletePetTypeById(id).subscribe(value => window.location.assign('/admin'));
  }
  restorePetType(id: number): void {
    this.petTypeService.restorePetType(id).subscribe(value => window.location.assign('/admin'));
  }
  /*update(): void {
    this.router.navigate(['/update-petType', this.petType]);
  }*/

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointmentById(id).subscribe(value => window.location.assign('/admin'));
  }
  restoreAppointment(id: number): void {
    this.appointmentService.restoreAppointment(id).subscribe(value => window.location.assign('/admin'));
  }
  /*update(): void {
    this.router.navigate(['/update-appointment', this.appointment]);
  }*/

}
