import { Component, OnInit } from '@angular/core';
import {Pet} from '../shared/models/pet';
import {Appointment} from '../shared/models/appointment';
import {AppointmentService} from '../shared/services/appointment.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PetService} from '../shared/services/pet.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  newPet: Pet;
  appointment = Appointment;

  constructor(private appointmentService: AppointmentService, private location: Location,
              private formBuilder: FormBuilder, private petService: PetService) {
    this.newPet = {} as Pet;
    // @ts-ignore
    this.appointment = {} as Appointment;
  }

  updateAppointmentGroup: FormGroup;
  date = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  ngOnInit(): void {
    this.updateAppointmentGroup = this.formBuilder.group({
      description: '',
      date: '',
      time: '',
      // pet: ''
    });
  }

  updateAppointment(appointment: Appointment): void {
    appointment.pet = this.newPet;
    this.petService.getPetById().subscribe(response => {
      this.newPet = response;
    });
    this.appointment = this.updateAppointmentGroup.value;
    console.log(appointment);
    this.appointmentService.updateAppointment(appointment).subscribe(value => window.location.assign('/appointment-list'));
  }

  goBack(): void {
    this.location.back();
  }

}
