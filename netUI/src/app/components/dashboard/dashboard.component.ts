import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../../services/api-client.service';
import { Device, DeviceGroup, Watched } from '../../types/device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string = 'Group 1';
  watched: Watched = {};
  devices: Device[] = [];
  spinner: boolean = false;


  constructor(private client: ApiClientService) {
  }

  ngOnInit() {
    this.spinner = true;
    this.client.getWatched('group1')
      .subscribe(devices => {
        this.spinner = false;
        this.devices = devices
      });
  }
}
