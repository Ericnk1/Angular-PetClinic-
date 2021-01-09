import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private APPOINT_BASE_URL = 'appointment';

  constructor(private httpClient: HttpClient) { }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.APPOINT_BASE_URL);
  }

  public getAllActiveAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.APPOINT_BASE_URL + '/active');
  }

  public restoreAppointment(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.APPOINT_BASE_URL + '/restore' + '/' + id);
  }

  public addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.APPOINT_BASE_URL, appointment);
  }

  public deleteAppointmentById(id: number): Observable<any> {
    return this.httpClient.delete(this.APPOINT_BASE_URL + '/' + id);
  }

  public updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(this.APPOINT_BASE_URL, appointment);
  }
}
