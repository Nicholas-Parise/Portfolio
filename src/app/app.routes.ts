import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'projects', component: ProjectsComponent},
{path: 'resume', component: ResumeComponent},
{path: 'about', component: AboutComponent},
{path: '**', component: HomeComponent, pathMatch: 'full'}
];
