import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificationsComponent } from './certifications/certifications.component';
import { DocumentsComponent } from './documents/documents.component';
import { IdeahubComponent } from './ideahub/ideahub.component';
import { InternaldepotComponent } from './internaldepot/internaldepot.component';
import { LibraryassetsComponent } from './libraryassets/libraryassets.component';
import { ResourceComponent } from './resource.component';

const routes: Routes =
  [
    {
      path: '', component: ResourceComponent,
      children: [
        {
          path: 'library', component: LibraryassetsComponent
        },
        {
          path: 'internal', component: InternaldepotComponent
        },
        {
          path: 'doc', component: DocumentsComponent
        },
        {
          path: 'idea', component: IdeahubComponent
        },
        {
          path: 'cerfification', component: CertificationsComponent
        }
      ]
    },


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
