import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankVirtualRoutingModule } from './bank-virtual-routing.module';
import { SimulatorComponent } from './simulator/simulator.component';
import {DashboardComponent} from "./dashboard/dashboard.component";


@NgModule({
  declarations: [
    DashboardComponent,
    SimulatorComponent
  ],
  imports: [
    CommonModule,
    BankVirtualRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BankVirtualModule { }
