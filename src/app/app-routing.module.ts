import { DetectComponent } from './modules/detect/detect.component';
import { DetectwashComponent } from './modules/detectwash/detectwash.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistogramComponent } from './shared/widgets/histogram/histogram.component';
import { LineComponent } from './shared/widgets/line/line.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'detectfront',
        component: DetectComponent
      },
      {
        path: 'detectwash',
        component: DetectwashComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
