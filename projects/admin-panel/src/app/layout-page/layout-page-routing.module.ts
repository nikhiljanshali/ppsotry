import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasbaordComponent } from './Dasbaord/Dasbaord.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: DasbaordComponent },
  // { path: '', redirectTo: 'dashboard' },
  // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPageRoutingModule { }
