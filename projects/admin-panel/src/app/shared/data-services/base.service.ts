
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {

  constructor(
    private httpClient: HttpClient, private url: String, private endpoint: String
  ) { }

  AuthorizationHeader() {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'JWT');
    return headers;
  }

  get(): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.url}/${this.endpoint}`);
  }

  read(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.url}/${this.endpoint}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.url}/${this.endpoint}`, item);
  }

  update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.url}/${this.endpoint}/${item}`, item);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`);
  }
}
