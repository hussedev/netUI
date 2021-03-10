import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Device } from '../types/device';
import { apiConf } from '../config';

import mockedData from '../mocks';

interface PostIP { [name: string]: string };

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private apiURL = `${apiConf.url}:${apiConf.port}`;

  constructor(public http: HttpClient) { }

  getAll(): Observable<Device[]> {
    return this.http
      .get<Device[]>(`${this.apiURL}/getAll`)
      .pipe(map(device => device));
  }

  postTarget(target: PostIP, mode?: string): Observable<Device[]> {
    return this.http
      .post<Device[]>(`${this.apiURL}/getAll`, target)
      .pipe(map(device => device));
  }

  getTarget(target: PostIP, mode?: string): Observable<Device[]> {
    return this.http
      .get<Device[]>(`${this.apiURL}/getAll/${target}`)
      .pipe(map(device => device));
  }

  getWatched(group: string): Observable<Device[]> {
    return of<Device[]>(mockedData.b);
  }
}
