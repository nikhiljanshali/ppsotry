import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './common/component/contact/contact.component';
import { EducationComponent } from './common/component/education/education.component';
import { ExpertiesComponent } from './common/component/experties/experties.component';
import { HomeComponent } from './common/component/home/home.component';
import { PagenotfoundComponent } from './common/component/pagenotfound/pagenotfound.component';
import { ProjectComponent } from './common/component/project/project.component';
import { WorkExperienceComponent } from './common/component/work-experience/work-experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'expertise', component: ExpertiesComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
