import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit{
  
  projects = {} as Project[];
 
  constructor(private titleService: Title, 
    private projectService: ProjectsService, 
    private metaTagService: Meta, 
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller){
    this.titleService.setTitle('Projects');
  }
  ngOnInit(): void {
    this.metaTagService.updateTag(
      {name:'description', content:"View all my projects"}
    );
    this.projects = this.projectService.GetProjects();
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(f => {
      if (f) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(f);
        });
      }
    });
  }


}
