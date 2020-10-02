import { DetectwashComponent } from './../../modules/detectwash/detectwash.component';
import { MatIconModule } from '@angular/material/icon';
import { TableComponent } from './../../shared/widgets/table/table.component';
import { ScenarioComponent } from './../../modules/scenario/scenario.component';
import { DetectComponent } from './../../modules/detect/detect.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    DetectComponent,
    ScenarioComponent,
    DetectwashComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [ScenarioComponent, TableComponent],
  providers: [DatePipe]
})
export class DefaultModule {}
