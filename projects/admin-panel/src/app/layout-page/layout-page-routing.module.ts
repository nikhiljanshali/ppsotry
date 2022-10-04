import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouterObj } from '../shared/const/router.constant';
import { AcadamicsComponent } from './acadamics/acadamics.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { DasbaordComponent } from './dasbaord/dasbaord.component';
import { EmployementHistoryComponent } from './employement-history/employement-history.component';
import { LanguageProficiencyComponent } from './language-proficiency/language-proficiency.component';
import { ProfileComponent } from './profile/profile.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { TechnicalComponent } from './technical/technical.component';

const routes: Routes = [
  { path: '', redirectTo: AppRouterObj.DASHBOARD, pathMatch: 'full' },
  { path: AppRouterObj.DASHBOARD, component: DasbaordComponent },
  { path: AppRouterObj.PROFILE, component: ProfileComponent },
  { path: AppRouterObj.ACADEMIC, component: AcadamicsComponent },
  { path: AppRouterObj.ACHIVEMENTS, component: AchivementsComponent },
  { path: AppRouterObj.EMPLOYEMENT, component: EmployementHistoryComponent },
  { path: AppRouterObj.TECHNICAL, component: TechnicalComponent },
  { path: AppRouterObj.SOFTSKILLS, component: SoftSkillsComponent },
  { path: AppRouterObj.LANGUAGE, component: LanguageProficiencyComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutPageRoutingModule { }
