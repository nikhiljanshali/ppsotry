import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layout-page/layout-page.module').then(m => m.LayoutPageModule) },
  { path: '**', loadChildren: () => import('./pagenotfound/pagenotfound.module').then(m => m.PagenotfoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
