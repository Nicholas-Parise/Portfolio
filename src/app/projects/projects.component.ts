import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { CommonModule } from '@angular/common';
    

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  
  projects = {} as Project[];
 
  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle('Projects');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
