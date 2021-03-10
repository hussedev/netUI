import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiClientService } from 'src/app/services/api-client.service';
import { Device } from 'src/app/types/device';

interface Scan {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-simplescan',
  templateUrl: './simplescan.component.html',
  styleUrls: ['./simplescan.component.css']
})
export class SimplescanComponent implements OnInit {
  targetForm = new FormControl('192.168.1.0/24');
  mode = new FormControl('over');
  target: string = ''
  result: Device[] = [];
  roles: string[] = ['sudo', 'normal'];
  scanTypes: Scan[] = [
    { value: '-sn', viewValue: 'simple' },
    { value: '', viewValue: 'commonPorts' },
    { value: '-d-', viewValue: 'allPorts' },
  ];
  constructor(private client: ApiClientService) {
    this.client.getWatched('group1')
      .subscribe(devices =>
        this.result = devices);
  }

  ngOnInit(): void {
  }

  scan() {
    this.target = this.targetForm.value;
    this.updateTarget('');
    this.client.getTarget({ ip: this.target })
      .subscribe(devices =>
        this.result = devices);
  }

  updateTarget(target: string) {
    this.targetForm.setValue(target);
  }

}
