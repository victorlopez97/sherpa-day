import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./bank-virtual/dashboard/dashboard.component";
import {SimulatorComponent} from "./bank-virtual/simulator/simulator.component";
import {SummaryComponent} from "./bank-virtual/summary/summary.component";

const routes: Routes = [
  {
    path: '', redirectTo: "dashboard", pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'simulator',
    component: SimulatorComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
