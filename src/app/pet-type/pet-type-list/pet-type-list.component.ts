import {Component, OnInit, ViewChild} from '@angular/core';
import {PetType} from '../../shared/models/petType';
import {MatSort} from '@angular/material/sort';
import {PetTypeService} from '../../shared/services/pet-type.service';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pet-type-list',
  templateUrl: './pet-type-list.component.html',
  styleUrls: ['./pet-type-list.component.css']
})
export class PetTypeListComponent implements OnInit {

  displayedColumnsActivePetType: string[] = ['id', 'name', 'button'];
  dataSourceActivePetType = null;

  displayedColumnsPetTypeAll: string[] = ['id', 'name', 'button'];
  dataSourcePetTypeAll = null;

  petTypes: PetType[];
  petType: PetType;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petTypeService: PetTypeService, private location: Location,
              private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

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
  }

  deletePetType(id: number): void {
    this.petTypeService.deletePetTypeById(id).subscribe(value => window.location.assign('/petType-list'));
  }
  restorePetType(id: number): void {
    this.petTypeService.restorePetType(id).subscribe(value => window.location.assign('/petType-list'));
  }
  fullyDeletePetType(id: number): void {
    this.petTypeService.fullyDeletePetTypeById(id).subscribe(value => window.location.assign('/petType-list'));
  }
  updatePetType(petType: PetType): void {
    this.router.navigate(['/update-petType', petType.id]);
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }
}
