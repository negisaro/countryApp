import { NgModule } from '@angular/core';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { CountriesModule } from '../countries/countries.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CountriesModule
],
})
export class DashboardModule { }
