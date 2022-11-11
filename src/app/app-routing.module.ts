import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {FreelancerscrudComponent} from "./freelancerscrud/freelancerscrud.component";
import {FreelancereditComponent} from "./freelanceredit/freelanceredit.component";


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'freelancerscrud', component: FreelancerscrudComponent},
  {path: 'freelanceredit/:id', component: FreelancereditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
