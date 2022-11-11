import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FreelancerslistComponent} from "./freelancerslist/freelancerslist.component";
import {HttpClientModule} from "@angular/common/http";
import { FreelancerscrudComponent } from './freelancerscrud/freelancerscrud.component';
import {FormsModule} from "@angular/forms";
import { FreelancereditComponent } from './freelanceredit/freelanceredit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FreelancerslistComponent,
    FreelancerscrudComponent,
    FreelancereditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
