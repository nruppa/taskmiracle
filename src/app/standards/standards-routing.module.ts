import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateComponent } from './corporate/corporate.component';
import { PartnerlogosComponent } from './corporate/partnerlogos/partnerlogos.component';
import { SocialsharesComponent } from './corporate/socialshares/socialshares.component';
import { VirtualMeetingComponent } from './corporate/virtual-meeting/virtual-meeting.component';
import { EmailsignatureComponent } from './emailsignature/emailsignature.component';
import { SocialpolicyComponent } from './socialpolicy/socialpolicy.component';
import { StandardsComponent } from './standards.component';

const routes: Routes = [
  {
    path: '', component: StandardsComponent,
    children:[
      {
        path:'corporate',component:CorporateComponent,
        children:[
          {path:'logos',component:PartnerlogosComponent},
          {path:'shares',component:SocialsharesComponent},
          {path:'metting',component:VirtualMeetingComponent},
        ]
      },
      {path:'social',component:SocialpolicyComponent},
      {path:'emails',component:EmailsignatureComponent},
      {path:'logos',component:PartnerlogosComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandardsRoutingModule { }
