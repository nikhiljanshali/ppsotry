import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppinitService } from '../core/services/appinit.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialAppSetup } from './app.initializer';
import { FooterComponent, HeaderComponent } from './shared/ui';
import { AsideBarComponent } from './shared/ui/aside-bar/aside-bar.component';
import { BreadcrumbsComponent } from './shared/ui/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideBarComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
  providers: [
    AppinitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initialAppSetup,
      deps: [AppinitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
