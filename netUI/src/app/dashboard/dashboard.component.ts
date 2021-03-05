import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Device, Target} from '../types/device';
import deviceList from '../mocks/mocks';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  targets: Target[] = [];

  testing: boolean = true;

  constructor(private client: ApiClientService) { }

  ngOnInit() {
    if (this.testing) {
      this.targets.push(
        {
          name: 'default',
          target: deviceList.a
        });
      this.targets.push(
        {
          name: 'group1',
          target: deviceList.b
        });
    } else {
      this.client.getAll()
        .subscribe(devices => {
          this.targets.push(
          {
            name: 'default',
            target: devices
          });
        });
      }
  }

}
