import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {Vet} from '../../shared/models/vet';
import {Owner} from '../../shared/models/owner';
import {PetType} from '../../shared/models/petType';
import {Appointment} from '../../shared/models/appointment';
import {MatSort} from '@angular/material/sort';
import {PetService} from '../../shared/services/pet.service';
import {VetService} from '../../shared/services/vet.service';
import {PetTypeService} from '../../shared/services/pet-type.service';
import {OwnerService} from '../../shared/services/owner.service';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  displayedColumnsActivePet: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner', 'button'];
  displayedColumnsPetAll: string[] = ['id', 'name', 'dateOfBirth', 'isVaccinated', 'petType', 'owner', 'button'];

  dataSourceActivePet = null;
  dataSourcePetAll = null;

  pets: Pet[];
  pet: Pet;
  vets: Vet[];
  vet: Vet;
  owners: Owner[];
  owner: Owner;
  petTypes: PetType[];
  petType: PetType;
  appointments: Appointment[];
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private vetService: VetService, private location: Location,
              private petTypeService: PetTypeService, private ownerService: OwnerService,
              private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

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
  }

  deletePet(id: number): void {
    this.petService.deletePetById(id).subscribe(value => window.location.assign('/pet-list'));
  }
  fullyDeletePet(id: number): void {
    this.petService.fullyDeletePetById(id).subscribe(value => window.location.assign('/pet-list'));
  }
  restorePet(id: number): void {
    this.petService.restorePet(id).subscribe(value => window.location.assign('/pet-list'));
  }
  update(pet: Pet): void {
    this.router.navigate(['/update-pet', pet.id]);
  }

  petAppointments(pet: Pet): void {
    this.router.navigate(['/pet', pet.id]);
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
