import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Vet} from '../models/vet';

@Injectable({
  providedIn: 'root'
})
export class VetService {
  private VET_BASE_URL = 'vet';

  constructor(private httpClient: HttpClient) { }

  public getAllVets(): Observable<Vet[]> {
    return this.httpClient.get<Vet[]>(this.VET_BASE_URL);
  }

  public getAllActiveVets(): Observable<Vet[]> {
    return this.httpClient.get<Vet[]>(this.VET_BASE_URL + '/active');
  }

  public restoreVet(id: number): Observable<Vet> {
    return this.httpClient.get<Vet>(this.VET_BASE_URL + '/restore' + '/' + id);
  }

  public addVet(vet: Vet): Observable<Vet> {
    return this.httpClient.post<Vet>(this.VET_BASE_URL, vet);
  }

  public deleteVetById(id: number): Observable<any> {
    return this.httpClient.delete(this.VET_BASE_URL + '/' + id);
  }

  public fullyDeleteVetById(id: number): Observable<any> {
    return this.httpClient.get(this.VET_BASE_URL + '/full-delete'  + '/' + id);
  }

  public updateVet(id: number, vet: Vet): Observable<Vet> {
    return this.httpClient.put<Vet>(this.VET_BASE_URL + '/' + id, vet);
  }

  public getVetById(id: number): Observable<Vet> {
    return this.httpClient.get<Vet>(this.VET_BASE_URL + '/res' + '/' + id);
  }
}
