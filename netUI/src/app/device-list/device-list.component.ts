import { Component, Input } from '@angular/core';
import { Device } from '../types/device';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent {
  @Input()
  devices?: Device[];
  @Input()
  name?: string;
}
