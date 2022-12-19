import { Injectable } from '@angular/core';
import { map, Observable, single, tap } from 'rxjs';
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
      this.acadamicResponse = single;
    }), map((x) => this.acadamicResponse));
  }

  public saveAcadamic(param: any): Observable<Acadamic[]> {
    console.log(param);
    return this.apiCommunicatorService.Post('/acadamic', param, true).pipe(tap(single => {
      this.acadamicResponse = single;
    }), map((x)=>this.acadamicResponse));
  }

}
