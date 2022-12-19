import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { EducationType, Months } from '../models/common';
import { ApiCommunicatorService } from '../shared/data-services';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private educationTypeRespones: Array<EducationType> = [];
  private monthResponses: Array<Months> = [];

  constructor(
    private apiCommunicatorService: ApiCommunicatorService,
  ) { }

  public getAllEducationType(): Observable<EducationType[]> {
    return this.apiCommunicatorService.Get('common/educations').pipe(tap(single => {
      this.educationTypeRespones = single;
    }), map((x) => this.educationTypeRespones));
  }

  public getAllMonths(): Observable<Months[]> {
    return this.apiCommunicatorService.Get('common/months').pipe(tap(single => {
      this.monthResponses = single;
    }), map((x) => this.monthResponses));
  }

}
