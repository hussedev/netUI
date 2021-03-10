import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgTerminalModule } from 'ng-terminal';

import { AngularMaterialModule } from './angular-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SimplescanComponent } from './components/simplescan/simplescan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceSingleComponent } from './components/device-single/device-single.component';
import { ScanResultComponent } from './components/scan-result/scan-result.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DeviceListComponent,
    DeviceSingleComponent,
    SimplescanComponent,
    NavbarComponent,
    ScanResultComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    [FormsModule, ReactiveFormsModule],
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
