import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';

import { SubChildComponent } from './sub-child/sub-child.component';
import { DisplayEmpComponent } from './display-emp/display-emp.component';

const routes: Routes = [
  {path:'',redirectTo:'sub',pathMatch:'full'},
  {path:'child',component:ChildComponent},
  {path:'sub',component:SubChildComponent},
  {path:'display/:receiveValue',component:DisplayEmpComponent},
  {path:'**',component:SubChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingPath=[ChildComponent,SubChildComponent,DisplayEmpComponent]
