import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EmailComponent } from './email/email.component';
import { HubbleComponent } from './hubble/hubble.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


const routes: Routes =
  [
    {
      path: '', component: AddComponent,
      children: [
        { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
        { path: 'Standards', loadChildren: () => import('./standards/standards.module').then(m => m.StandardsModule) },
        { path: 'Resource', loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule) },
        { path: 'yourapps', loadChildren: () => import('./yourapps/yourapps.module').then(m => m.YourappsModule) },
        { path: 'reset', component: ResetpasswordComponent },
      ],
    },
    { path: 'back', component: AddComponent },
    { path: 'hubble', component: HubbleComponent },
    { path: 'email', component: EmailComponent }

  ];

//  {
//   path:'',component:AddComponent, 
//   children:[
//       {
//       path:'add1',component:Add1Component,
//       children:[
//       { path: 'Employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
//       { path: 'Standards', loadChildren: () => import('./standards/standards.module').then(m => m.StandardsModule) },
//       { path: 'Resource', loadChildren: () => import('./resource/resource.module').then(m => m.ResourceModule) },
//       { path: 'yourapps', loadChildren: () => import('./yourapps/yourapps.module').then(m => m.YourappsModule) },
//       ]
//     },
//     { path:'reset',component:ResetpasswordComponent},
//   ],
//  },
// {path:'back',component:Add1Component },
// { path: 'hubble', component: HubbleComponent},
// { path: 'email', component: EmailComponent}, 
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

