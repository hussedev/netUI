import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Device } from '../types/device';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  devices: Device[] = [];

  constructor(private client: ApiClientService) { }

  ngOnInit() {
    this.client.getAll()
      .subscribe(devices => {
        console.log('devices:',devices);
        this.devices = devices;
      });
  }

}
