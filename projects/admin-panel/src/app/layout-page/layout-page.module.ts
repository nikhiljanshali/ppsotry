import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageRoutingModule } from './layout-page-routing.module';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { DasbaordComponent } from './dasbaord/dasbaord.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutPageRoutingModule
  ],
  declarations: [
    LayoutPageComponent,
    DasbaordComponent,
  ],
})
export class LayoutPageModule { }
