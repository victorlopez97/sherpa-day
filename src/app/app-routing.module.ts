import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./bank-virtual/dashboard/dashboard.component";
import {SimulatorComponent} from "./bank-virtual/simulator/simulator.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
