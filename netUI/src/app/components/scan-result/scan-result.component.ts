import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../types/device';
@Component({
  selector: 'app-scan-result',
  templateUrl: './scan-result.component.html',
  styleUrls: ['./scan-result.component.css']
})
export class ScanResultComponent implements OnInit {

  @Input()
  devices?: Device[];
  @Input()
  name?: string;

  width?: number;

  gridColumns: number = 3;

  ngOnInit() {
  }

}
