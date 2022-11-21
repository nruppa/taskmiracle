import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceRoutingModule } from './resource-routing.module';
import { ResourceComponent } from './resource.component';
import { LibraryassetsComponent } from './libraryassets/libraryassets.component';
import { InternaldepotComponent } from './internaldepot/internaldepot.component';
import { DocumentsComponent } from './documents/documents.component';
import { IdeahubComponent } from './ideahub/ideahub.component';
import { CertificationsComponent } from './certifications/certifications.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ResourceComponent,
    LibraryassetsComponent,
    InternaldepotComponent,
    DocumentsComponent,
    IdeahubComponent,
    CertificationsComponent
  ],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    ToolbarModule,
    ButtonModule
  ]
})
export class ResourceModule { }
