import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { EventsComponent } from './events/events.component';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';



@NgModule({
  declarations: [
    EmployeeComponent,
    DashboardComponent,
    ReferralsComponent,
    SuggestionsComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ButtonModule,
    ToolbarModule
  ]
})
export class EmployeeModule { }
