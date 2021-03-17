import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {AppointmentService} from '../shared/services/appointment.service';
import {Appointment} from '../shared/models/appointment';
import {MatTableDataSource} from '@angular/material/table';
import {Pet} from '../shared/models/pet';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../shared/services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  displayedColumnsAllAppointment: string[] = ['id', 'description', 'date', 'time'];
  dataSourceAllAppointment = null;

  pet: Pet;
  appointments: Appointment[];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private appointmentService: AppointmentService, private petService: PetService,
              private route: ActivatedRoute, private router: Router) {
    this.pet = {} as Pet;
  }

  ngOnInit(): void {
    this.pet.id = this.route.snapshot.params.id;
    this.petService.getPetById(this.pet.id).subscribe(value => {
      this.pet = value;
      this.pet.appointmentList = this.appointments;
      console.log(value);
      this.dataSourceAllAppointment = new MatTableDataSource(this.appointments);
      this.dataSourceAllAppointment.sort = this.sort;
    });
  }

  goBack(): void {
    this.router.navigate(['/pet-list']);
  }

}
