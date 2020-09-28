import { TableComponent } from './../../shared/widgets/table/table.component';
import { ScenarioComponent } from './../../modules/scenario/scenario.component';
import { DetectComponent } from './../../modules/detect/detect.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DetectComponent,
    ScenarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ],
  exports: [
    ScenarioComponent,
    TableComponent
  ]
})
export class DefaultModule { }
