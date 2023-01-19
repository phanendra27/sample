import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EditemplComponent } from './editempl/editempl.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'employee',component:EmployeeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
