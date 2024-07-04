import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule
  ]
})
export class DashboradModule { }
