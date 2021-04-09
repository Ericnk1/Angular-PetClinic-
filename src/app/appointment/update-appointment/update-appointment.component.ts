import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/pet';
import {Appointment} from '../../shared/models/appointment';
import {AppointmentService} from '../../shared/services/appointment.service';
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  newPet: Pet;
  appointment: Appointment;

  constructor(private appointmentService: AppointmentService, private location: Location,
              private route: ActivatedRoute, private router: Router,
              private formBuilder: FormBuilder, private petService: PetService) {
    this.newPet = {} as Pet;
    this.appointment = {} as Appointment;
  }

  updateAppointmentGroup: FormGroup;
  date = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  ngOnInit(): void {
    this.appointment.id = this.route.snapshot.params.id;
    this.appointmentService.getAppointmentById(this.appointment.id).subscribe(value => {
      this.appointment = value;
      this.updateAppointmentGroup.setValue(this.appointment);
    });
    console.log(this.appointment);
    this.updateAppointmentGroup = this.formBuilder.group({
      id: new FormControl(this.appointment.id, Validators.required),
      description: new FormControl(this.appointment.description, Validators.required),
      date: new FormControl(this.appointment.date, Validators.required),
      time: new FormControl(this.appointment.time, Validators.required),
      // pet: new FormControl(this.appointment.pet.id, Validators.required)
    });
  }

  updateAppointment(appointment: Appointment): void {
    /*appointment.pet = this.newPet;
    this.petService.getPetById(this.newPet.id).subscribe(response => {
      this.newPet = response;
    });*/
    this.appointment = this.updateAppointmentGroup.value;
    appointment.date = new Date(appointment.date);
    console.log(appointment);
    this.appointmentService.updateAppointment(appointment.id, appointment).subscribe(value => window.location.assign('/appointment-list'));
  }

  goBack(): void {
    this.router.navigate(['/appointment-list']);
  }

}
