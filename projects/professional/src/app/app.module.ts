import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/component/header/header.component';
import { NavigationComponent } from './common/component/navigation/navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './common/component/contact/contact.component';
import { ExpertiesComponent } from './common/component/experties/experties.component';
import { ProjectComponent } from './common/component/project/project.component';
import { EducationComponent } from './common/component/education/education.component';
import { HomeComponent } from './common/component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpertiesComponent,
    ProjectComponent,
    ExpertiesComponent,
    EducationComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
