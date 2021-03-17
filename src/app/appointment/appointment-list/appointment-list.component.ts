import {Component, OnInit, ViewChild} from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {Owner} from '../../shared/models/owner';
import {PetType} from '../../shared/models/petType';
import {Appointment} from '../../shared/models/appointment';
import {MatSort} from '@angular/material/sort';
import {PetService} from '../../shared/services/pet.service';
import {OwnerService} from '../../shared/services/owner.service';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Location} from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  displayedColumnsActiveAppointment: string[] = ['id', 'description', 'date', 'time', 'button'];
  dataSourceActiveAppointment = null;

  displayedColumnsAppointmentAll: string[] = ['id', 'description', 'date', 'time', 'button'];
  dataSourceAppointmentAll = null;

  pet: Pet;
  owner: Owner;
  petType: PetType;
  appointments: Appointment[];
  appointment: Appointment;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private petService: PetService, private ownerService: OwnerService, private location: Location,
              private appointmentService: AppointmentService, private router: Router) { }

  ngOnInit(): void {

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
    this.appointmentService.findAppointmentByPetId(this.pet.id).subscribe(value => {
      this.appointments = value;
      console.log(value);
    });
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointmentById(id).subscribe(value => window.location.assign('/appointment-list'));
  }
  fullyDeleteAppointment(id: number): void {
    this.appointmentService.fullyDeleteAppointmentById(id).subscribe(value => window.location.assign('/appointment-list'));
  }
  restoreAppointment(id: number): void {
    this.appointmentService.restoreAppointment(id).subscribe(value => window.location.assign('/appointment-list'));
  }
  updateAppointment(appointment: Appointment): void {
    this.router.navigate(['/update-appointment', appointment.id]);
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
