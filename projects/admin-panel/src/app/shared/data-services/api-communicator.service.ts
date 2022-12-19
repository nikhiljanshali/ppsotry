import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppinitService } from 'projects/admin-panel/src/core/services';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiCommunicatorService {

  private urlStartPoint: string = '';

  constructor(
    private http: HttpClient,
    private appinitService: AppinitService,
  ) {
    this.appinitService.config$.subscribe((value) => {
      this.urlStartPoint = value.API.apiRoot;
    })
  }

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    })
  };


  Get(endPoint: any) {
    let uri = this.urlStartPoint + '/' + endPoint;
    return this.http.get(`${uri}`, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.get(`${uri}/${params}`, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Read(endPoint: any, params?: any) {
    let uri = this.urlStartPoint;
    return this.http.get(`${uri}/${endPoint}/${params}`).pipe(map((response: any) => { return response }));
  }


  Post(endPoint: any, params?: any, isReturn: boolean = false) {
    let uri = this.urlStartPoint + endPoint;
    console.log(uri);
    return this.http.post(uri, params, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.post(uri, params, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Put(uri?: string, params?: any, isReturn: boolean = false) {
    return this.http.put(this.urlStartPoint, params, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.put(uri, params, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Delete(uri?: string, params?: any, isReturn: boolean = false) {
    return this.http.delete(this.urlStartPoint, params).pipe(map((response: any) => { return response }));
    // return this.http.delete(`${uri}/${params}`, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }
}
