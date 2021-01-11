import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AppointmentService} from '../shared/services/appointment.service';
import {Location} from '@angular/common';
import {Appointment} from '../shared/models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService, private location: Location,
              private formBuilder: FormBuilder) { }

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

  addAppointment(): void {
    const addAppointment = new Appointment(null, this.addAppointmentGroup.get('description').value,
      this.addAppointmentGroup.get('date').value, this.addAppointmentGroup.get('time').value,
      this.addAppointmentGroup.get('pet').value, null);
    console.log(addAppointment);
    this.appointmentService.addAppointment(addAppointment).subscribe(value => window.location.assign('/appointment'));
  }

  goBack(): void {
    this.location.back();
  }

}
