import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageRoutingModule } from './layout-page-routing.module';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { DasbaordComponent } from './Dasbaord/Dasbaord.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    DasbaordComponent,
  ],
  imports: [
    CommonModule,
    LayoutPageRoutingModule
  ]
})
export class LayoutPageModule { }
