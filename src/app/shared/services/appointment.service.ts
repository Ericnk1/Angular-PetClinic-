import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Appointment} from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private APPOINTMENT_BASE_URL = 'appointment';

  constructor(private httpClient: HttpClient) { }

  public getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.APPOINTMENT_BASE_URL);
  }

  public getAllActiveAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.APPOINTMENT_BASE_URL + '/active');
  }

  public restoreAppointment(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.APPOINTMENT_BASE_URL + '/restore' + '/' + id);
  }

  public addAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(this.APPOINTMENT_BASE_URL, appointment);
  }

  public deleteAppointmentById(id: number): Observable<any> {
    return this.httpClient.delete(this.APPOINTMENT_BASE_URL + '/' + id);
  }

  public updateAppointment(id: number, appointment: Appointment): Observable<Appointment> {
    return this.httpClient.put<Appointment>(this.APPOINTMENT_BASE_URL + '/' + id, appointment);
  }

  public findAppointmentByPetId(petId: number): Observable<any> {
    return this.httpClient.get(this.APPOINTMENT_BASE_URL + '/list' + '/' + petId);
  }

  public fullyDeleteAppointmentById(id: number): Observable<any> {
    return this.httpClient.get(this.APPOINTMENT_BASE_URL + '/full-delete'  + '/' + id);
  }

  public getAppointmentById(id: number): Observable<Appointment> {
    return this.httpClient.get<Appointment>(this.APPOINTMENT_BASE_URL + '/res' + '/' + id);
  }
}
