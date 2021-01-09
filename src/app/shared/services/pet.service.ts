import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Pet} from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private PET_BASE_URL = 'pet';

  constructor(private httpClient: HttpClient) { }

  public getAllPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.PET_BASE_URL);
  }

  public getAllActivePets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.PET_BASE_URL + '/active');
  }

  public restorePet(id: number): Observable<Pet> {
    return this.httpClient.get<Pet>(this.PET_BASE_URL + '/restore' + '/' + id);
  }

  public addPet(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(this.PET_BASE_URL, pet);
  }

  public deletePetById(id: number): Observable<any> {
    return this.httpClient.delete(this.PET_BASE_URL + '/' + id);
  }

  public updatePet(pet: Pet): Observable<Pet> {
    return this.httpClient.put<Pet>(this.PET_BASE_URL, pet);
  }
}
