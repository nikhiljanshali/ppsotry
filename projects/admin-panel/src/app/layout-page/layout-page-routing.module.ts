import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterObj } from '../shared/common/router.constant';
import { DasbaordComponent } from './Dasbaord/Dasbaord.component';
import { ProfileComponent } from './Profile/Profile.component';

const routes: Routes = [
  { path: '', redirectTo: AppRouterObj.DASHBOARD, pathMatch: 'full' },
  { path: AppRouterObj.DASHBOARD, component: DasbaordComponent },
  { path: AppRouterObj.PROFILE, component: ProfileComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPageRoutingModule { }
