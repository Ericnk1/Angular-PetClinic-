import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PetType} from '../models/petType';

@Injectable({
  providedIn: 'root'
})
export class PetTypeService {
  private PET_TYPE_BASE_URL = 'pet';

  constructor(private httpClient: HttpClient) { }

  public getAllPetTypes(): Observable<PetType[]> {
    return this.httpClient.get<PetType[]>(this.PET_TYPE_BASE_URL);
  }

  public getAllActivePetTypes(): Observable<PetType[]> {
    return this.httpClient.get<PetType[]>(this.PET_TYPE_BASE_URL + '/active');
  }

  public restorePetType(id: number): Observable<PetType> {
    return this.httpClient.get<PetType>(this.PET_TYPE_BASE_URL + '/restore' + '/' + id);
  }

  public addPetType(petType: PetType): Observable<PetType> {
    return this.httpClient.post<PetType>(this.PET_TYPE_BASE_URL, petType);
  }

  public deletePetTypeById(id: number): Observable<any> {
    return this.httpClient.delete(this.PET_TYPE_BASE_URL + '/' + id);
  }

  public updateCourse(petType: PetType): Observable<PetType> {
    return this.httpClient.put<PetType>(this.PET_TYPE_BASE_URL, petType);
  }
}
