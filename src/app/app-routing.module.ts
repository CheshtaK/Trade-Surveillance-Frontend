import { DetectComponent } from './modules/detect/detect.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './layouts/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'detect',
      component: DetectComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
