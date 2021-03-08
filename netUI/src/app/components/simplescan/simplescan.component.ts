import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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
    mode = new FormControl('over');

  ip: string = '';
  roles: string[] = ['sudo', 'normal'];
  scanTypes: Scan[] = [
    {value: '-sn', viewValue: 'simple'},
    {value: '', viewValue: 'commonPorts'},
    {value: '-d-', viewValue: 'allPorts'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
