import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../shared/models/pet';
import {Vet} from '../shared/models/vet';
import {Appointment} from '../shared/models/appointment';
import {MatSort} from '@angular/material/sort';
import {PetService} from '../shared/services/pet.service';
import {VetService} from '../shared/services/vet.service';
import {AppointmentService} from '../shared/services/appointment.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.css']
})
export class VetListComponent implements OnInit {

  displayedColumnsActiveVet: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  dataSourceActiveVet = null;

  displayedColumnsVetAll: string[] = ['id', 'firstName', 'lastName', 'email', 'button'];
  dataSourceVetAll = null;

  pet: Pet;
  vets: Vet[];
  vet: Vet;
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private vetService: VetService, private location: Location,
              private appointmentService: AppointmentService, private router: Router) { }

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
  }

  deleteVet(id: number): void {
    this.vetService.deleteVetById(id).subscribe(value => window.location.assign('/admin'));
  }
  restoreVet(id: number): void {
    this.vetService.restoreVet(id).subscribe(value => window.location.assign('/admin'));
  }
  updateVet(): void {
    this.router.navigate(['/update-vet']);
  }

  goBack(): void {
    this.location.back();
  }
}
