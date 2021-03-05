import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Device } from './types/device';
import { apiConf } from './config';
@Injectable({
  providedIn: 'root'
})

export class ApiClientService {
  private apiURL = `${apiConf.url}:${apiConf.port}`;

  constructor(public http: HttpClient) {}

  getAll(): Observable<Device[]> {
    return this.http
      .get<Device[]>('http://localhost:3000/getAll')//`${this.apiURL}/getAll`)
      .pipe(map(device => {
        console.log(device);
        return device;
      }));
  }
}
