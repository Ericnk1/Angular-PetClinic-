import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppointmentService} from '../shared/services/appointment.service';
import {Location} from '@angular/common';
import {Appointment} from '../shared/models/appointment';
import {Pet} from '../shared/models/pet';
import {PetService} from '../shared/services/pet.service';
import * as moment from 'moment';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  newPet: Pet;
  appointment: Appointment;

  constructor(private appointmentService: AppointmentService, private location: Location, private router: Router,
              private formBuilder: FormBuilder, private petService: PetService) {
    this.newPet = {} as Pet;
    this.appointment = {} as Appointment;
  }

              addAppointmentGroup: FormGroup;
  date = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  ngOnInit(): void {
    this.addAppointmentGroup = this.formBuilder.group({
      description: '',
      date: '',
      time: '',
      pet: ''
    });
  }

  addAppointment(appointment: Appointment): void {
    this.petService.getPetById(this.newPet.id).subscribe(response => {
      this.newPet = response;
      appointment.pet = this.newPet;
    });
    appointment.date =  new Date(appointment.date);
    this.appointment = this.addAppointmentGroup.value;
    console.log(appointment);
    this.appointmentService.addAppointment(appointment).subscribe(value => window.location.assign('/home'));
  }

  goBack(): void {
    this.router.navigate(['/admin']);
  }

}
