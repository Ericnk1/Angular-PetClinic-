import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Owner} from '../models/owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private OWNER_BASE_URL = 'owner';

  constructor(private httpClient: HttpClient) { }

  public getAllOwners(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.OWNER_BASE_URL);
  }

  public getAllActiveOwners(): Observable<Owner[]> {
    return this.httpClient.get<Owner[]>(this.OWNER_BASE_URL + '/active');
  }

  public restoreOwner(id: number): Observable<Owner> {
    return this.httpClient.get<Owner>(this.OWNER_BASE_URL + '/restore' + '/' + id);
  }

  public addOwner(owner: Owner): Observable<Owner> {
    return this.httpClient.post<Owner>(this.OWNER_BASE_URL, owner);
  }

  public deleteOwnerById(id: number): Observable<any> {
    return this.httpClient.delete(this.OWNER_BASE_URL + '/' + id);
  }

  public fullyDeleteVetById(id: number): Observable<any> {
    return this.httpClient.get(this.OWNER_BASE_URL + '/full-delete'  + '/' + id);
  }

  public updateOwner(id: number, owner: Owner): Observable<Owner> {
    return this.httpClient.put<Owner>(this.OWNER_BASE_URL + '/' + id, owner);
  }

  public getOwnerById(id: number): Observable<Owner> {
    return this.httpClient.get<Owner>(this.OWNER_BASE_URL + '/res' + '/' + id);
  }
}
