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
import { HistogramComponent } from './widgets/histogram/histogram.component';
import { AddpanelComponent } from './components/addpanel/addpanel.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineComponent,
    TableComponent,
    HistogramComponent,
    AddpanelComponent
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
    MatTableModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LineComponent,
    TableComponent,
    HistogramComponent,
    AddpanelComponent
  ]
})
export class SharedModule {}
