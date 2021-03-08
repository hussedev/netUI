import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../types/device';


interface Card {
  img?: string,
  description?: string,
  title?: string,
  subtitles?: string[],
}

@Component({
  selector: 'app-device-single',
  templateUrl: './device-single.component.html',
  styleUrls: ['./device-single.component.css']
})
export class DeviceSingleComponent implements OnInit{

  @Input()
  device?: Device;

  @Input()
  gridColumns?: number;

  card: Card = {};

  ngOnInit() {
    if(this.device) this.card = this.renderCard(this.device);
  }

  renderCard(device: Device): Card {
    let res: Card = {};
    if (device) {
      res.title = device.hostname || device.ip4 || "Unknown";
      device.hostname
        ? res.subtitles = [device.ip4 || "Unknown IP Address"]
        : res.subtitles = [];
      if(device.mac) res.subtitles.push(device.mac);
      if(device.brand) res.subtitles.push(device.brand);

      switch (device.status) {
        case 'on':
          res.img = 'assets/svg/pc-green.svg';
          break;
        case 'off':
          res.img = 'assets/svg/pc-red.svg';
          break;
        case 'unknown':
          res.img = 'assets/svg/pc-unknown.svg';
          break;
        default:
          res.img = 'assets/svg/pc-blue.svg';
      }
    }
    return res;
  }
}
