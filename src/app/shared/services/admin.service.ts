import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private ADMIN_BASE_URL = 'admin';

  constructor(private httpClient: HttpClient) { }

  public getAllAdmins(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.ADMIN_BASE_URL);
  }

  public getAllActiveAdmins(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(this.ADMIN_BASE_URL + '/active');
  }

  public getAdminById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(this.ADMIN_BASE_URL + '/res' + '/' + id);
  }

  public restoreAdmin(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(this.ADMIN_BASE_URL + '/restore' + '/' + id);
  }

  public addAdmin(admin: Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.ADMIN_BASE_URL, admin);
  }

  public deleteAdminById(id: number): Observable<any> {
    return this.httpClient.delete(this.ADMIN_BASE_URL + '/' + id);
  }

  public fullyDeleteAdminById(id: number): Observable<any> {
    return this.httpClient.get(this.ADMIN_BASE_URL + '/full-delete'  + '/' + id);
  }

  public updateAdmin(id: number, admin: Admin): Observable<Admin> {
    return this.httpClient.put<Admin>(this.ADMIN_BASE_URL + '/' + id, admin);
  }
}
