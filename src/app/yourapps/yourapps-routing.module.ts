import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubbleComponent } from '../hubble/hubble.component';
import { BlogComponent } from './blog/blog.component';
import { MtalkComponent } from './mtalk/mtalk.component';
import { YourappsComponent } from './yourapps.component';

const routes: Routes = [
  {
    path: '', component: YourappsComponent,
    children:[
      {
        path:'hubbles',component:HubbleComponent
      },
      {
        path:'mtalk',component:MtalkComponent
      },
      {
        path:'blog',component:BlogComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourappsRoutingModule { }
