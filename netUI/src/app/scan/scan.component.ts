import { Component, OnInit } from '@angular/core';
import { DeviceGroup } from '../types/device';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  devices: DeviceGroup = {};

  constructor(private client: ApiClientService) { }

  ngOnInit(): void {
  }

  // scan(target: string) {
  //   this.client.getAll()
  //     .subscribe(devices =>
  //       this.devices[target] = devices);
  // }
}

