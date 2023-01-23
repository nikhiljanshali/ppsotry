import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageRoutingModule } from './layout-page-routing.module';
import { LayoutPageComponent } from '../layout-page/layout-page.component';
import { DasbaordComponent } from './dasbaord/dasbaord.component';
import { AcadamicsComponent } from './acadamics/acadamics.component';
// Datepicker module
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutPageComponent,
    AcadamicsComponent,
    DasbaordComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    LayoutPageRoutingModule,
  ],
})
export class LayoutPageModule { }
