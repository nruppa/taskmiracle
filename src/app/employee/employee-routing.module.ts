import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee.component';
import { EventsComponent } from './events/events.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

const routes: Routes = [
{
   path: '', component: EmployeeComponent ,
   children:[
    {
      path:'dashboard',component:DashboardComponent
    },
    {
      path:'referrals',component:ReferralsComponent
    },
    {
      path:'suggestions',component:SuggestionsComponent
    },
    {
      path:'events',component:EventsComponent
    }
   ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
