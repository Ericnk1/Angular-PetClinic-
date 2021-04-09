import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  private TYPES_BASE_URL = 'types';

  constructor(private httpClient: HttpClient) { }

  public getPetTypes(): Observable <string[]> {
    return this.httpClient.get<string[]>(this.TYPES_BASE_URL);
  }
}
