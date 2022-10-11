import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Acadamic } from '../models/business';
import { ApiCommunicatorService } from '../shared/data-services';

@Injectable({
  providedIn: 'root'
})
export class AcadamicsService {

  private acadamicResponse: Array<Acadamic> = [];

  constructor(
    private apiCommunicatorService: ApiCommunicatorService,
  ) { }

  public getAllAcadamic(): Observable<Acadamic[]> {
    return this.apiCommunicatorService.Get('acadamic').pipe(tap(single => {
      this.acadamicResponse.push(single);
    }), map(() => this.acadamicResponse));
  }

}
