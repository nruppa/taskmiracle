import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardsRoutingModule } from './standards-routing.module';
import { StandardsComponent } from './standards.component';
import { CorporateComponent } from './corporate/corporate.component';
import { SocialpolicyComponent } from './socialpolicy/socialpolicy.component';
import { EmailsignatureComponent } from './emailsignature/emailsignature.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import { PartnerlogosComponent } from './corporate/partnerlogos/partnerlogos.component';
import {ScrollerModule} from 'primeng/scroller';
import {DataViewModule} from 'primeng/dataview';
import {ImageModule} from 'primeng/image';
import {TreeModule} from 'primeng/tree';
import {MenubarModule} from 'primeng/menubar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { SocialsharesComponent } from './corporate/socialshares/socialshares.component';
import { VirtualMeetingComponent } from './corporate/virtual-meeting/virtual-meeting.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';


@NgModule({
  declarations: [
    StandardsComponent,
    CorporateComponent,
    SocialpolicyComponent,
    EmailsignatureComponent,
    PartnerlogosComponent,
    SocialsharesComponent,
    VirtualMeetingComponent
  ],
  imports: [
    CommonModule,
    StandardsRoutingModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    MenuModule,
    ScrollerModule,
    DataViewModule,
    ImageModule,
    TreeModule,
    MenubarModule,
    ScrollPanelModule,
    SelectButtonModule,
    ToggleButtonModule
    
  ]
})
export class StandardsModule { }
