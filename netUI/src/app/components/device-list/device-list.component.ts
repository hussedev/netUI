import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Device } from '../../types/device';
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})

export class DeviceListComponent implements OnInit {
  @Input()
  devices?: Device[];
  @Input()
  name?: string;

  width?: number;

  resizeObservable$?: Observable<Event>;
  resizeSubscription$?: Subscription;

  gridColumns: number = 1;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 4 ? 5 : 4;
  }

  ngOnInit() {
    this.updateWidth(window.innerWidth);

    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    this.updateWidth(window.innerWidth);
    })
  }

  updateWidth(width: number) {
    this.width = width;
    if (width <= 700) this.gridColumns = 1;
    else if (width <= 900) this.gridColumns = 3;
    else this.gridColumns = 5;
  }
}
