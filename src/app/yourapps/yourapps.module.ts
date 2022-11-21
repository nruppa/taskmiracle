import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourappsRoutingModule } from './yourapps-routing.module';
import { YourappsComponent } from './yourapps.component';
import { HubbleComponent } from './hubble/hubble.component';
import { MtalkComponent } from './mtalk/mtalk.component';
import { BlogComponent } from './blog/blog.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    YourappsComponent,
    HubbleComponent,
    MtalkComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    YourappsRoutingModule,
    ToolbarModule,
    ButtonModule
  ]
})
export class YourappsModule { }
