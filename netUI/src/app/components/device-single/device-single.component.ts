import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../types/device';


interface Info {
  [name: string]: string;
}


@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.css']
})
export class DeviceSingleComponent implements OnInit {

  @Input()
  device?: Device;

  @Input()
  gridColumns?: number;

  info: Info = {};


  ngOnInit() {
    if (this.device) this.info = this.renderCard(this.device);
  }

  watch(): boolean {
    if (!this.device) return false;
    if (!this.device.watched) {
      this.device.watched = true;
      return true;
    }
    return false;
  }

  unwatch(): boolean {
    if (!this.device) return false;
    if (this.device.watched) {
      this.device.watched = false;
      return true;
    }
    return false;
  }

  renderCard(device: Device): Info {
    let res: Info = {};
    if (device) {
      res.hostname = device.hostname || "Unknown";
      res.ip = device.ip4 || "Unknown";
      res.mac = device.mac || "Unknown";
      res.brand = device.brand || "Unknown";
      switch (device.status) {
        case 'on':
          res.img = 'assets/svg/pc-on.svg';
          break;
        case 'off':
          res.img = 'assets/svg/pc-off.svg';
          break;
        case 'unknown':
          res.img = 'assets/svg/pc-unknown.svg';
          break;
        default:
          res.img = 'assets/svg/pc-default.svg';
      }
    }
    return res;
  }
}
