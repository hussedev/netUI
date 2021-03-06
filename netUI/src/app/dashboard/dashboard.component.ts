import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Device, DeviceGroup, Watched} from '../types/device';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  watched: Watched = {};
  devices: DeviceGroup = {};

  constructor(private client: ApiClientService) { }

  ngOnInit() {
    this.devices["default"] = [];
    this.devices["group1"] = [];
    this.client.getAll()
      .subscribe(devices =>
        this.devices["default"] = devices);
    this.client.getWatched('group1')
    .subscribe(devices =>
      this.devices["group1"] = devices);
  }
}
