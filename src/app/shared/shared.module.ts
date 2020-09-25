import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { LineComponent } from './widgets/line/line.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { TableComponent } from './widgets/table/table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineComponent,
    TableComponent
  ]
})
export class SharedModule { }
