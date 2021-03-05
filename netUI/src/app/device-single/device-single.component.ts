import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../types/device';

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.css']
})
export class DeviceSingleComponent {

  @Input()
  device?: Device;
}
