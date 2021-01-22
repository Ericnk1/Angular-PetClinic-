import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsVaccinatedService {

  private ISVACCINATED_BASE_URL = 'isVaccinated';

  constructor(private httpClient: HttpClient) { }

  public getIsVaccinated(): Observable <string[]> {
    return this.httpClient.get<string[]>(this.ISVACCINATED_BASE_URL);
  }
}
