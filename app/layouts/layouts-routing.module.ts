import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './common-layout/common-layout.component';


const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(u => u.UserModule)
  },
  {
    path: '', component: CommonLayoutComponent, children: [
      {
        path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(d => d.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
