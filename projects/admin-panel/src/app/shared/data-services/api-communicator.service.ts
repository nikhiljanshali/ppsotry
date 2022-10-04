import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiCommunicatorService {

  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    })
  };


  Get(uri: string, params: any) {
    return this.http.get(`${uri}/${params}`, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.get(`${uri}/${params}`, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Post(uri: string, params: any, isReturn: boolean = false) {
    return this.http.post(uri, params, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.post(uri, params, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Put(uri: string, params: any, isReturn: boolean = false) {
    return this.http.put(uri, params, this.httpOptions).pipe(map((response: any) => { return response }));
    // return this.http.put(uri, params, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }

  Delete(uri: string, params: any, isReturn: boolean = false) {
    return this.http.delete(uri, params).pipe(map((response: any) => { return response }));
    // return this.http.delete(`${uri}/${params}`, this.httpOptions).map((response: T) => {
    //   return response;
    // }).catch(this.handleError);
  }
}
