import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankVirtualRoutingModule } from './bank-virtual-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BankVirtualRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class BankVirtualModule { }
