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
  targetForm = new FormControl('');
  mode = new FormControl('over');
  target: string = '';
  spinner: boolean = false;
  result: Device[] = [];
  roles: string[] = ['sudo', 'normal'];
  scanTypes: Scan[] = [
    { value: '-sn', viewValue: 'simple' },
    { value: '', viewValue: 'commonPorts' },
    { value: '-d-', viewValue: 'allPorts' },
  ];
  constructor(private client: ApiClientService) {
  }

  ngOnInit(): void {
  }

  scan() {
    this.target = this.targetForm.value;
    this.updateTarget('');
    this.result = [];
    this.spinner = true;
    this.client.getAll()
      .subscribe(devices => {
        this.spinner = false;

        devices
          .forEach(device => {
            this.result.push(device);
          }
          );
      }
      );
  }

  updateTarget(target: string) {
    this.targetForm.setValue(target);
  }

}
