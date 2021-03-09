import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimplescanComponent } from './components/simplescan/simplescan.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'simplescan', component: SimplescanComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
