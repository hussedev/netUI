import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Device, Target} from '../types/device';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  targets: Target[] = [];

  constructor(private client: ApiClientService) { }

  ngOnInit() {
    this.client.getAll()
      .subscribe(devices => {
        this.targets.push(
        {
          name: 'default',
          target: devices
        });
      });

    this.client.getWatched('group1')
    .subscribe(devices => {
      this.targets.push(
      {
        name: 'group1',
        target: devices
      });
    });

  }
}
