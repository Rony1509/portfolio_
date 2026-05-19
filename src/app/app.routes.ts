import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { EducationComponent } from './components/education/education';
import { AchievementsComponent } from './components/achievements/achievements';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience';
import { ContactComponent } from './components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'achievements',
    component: AchievementsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
