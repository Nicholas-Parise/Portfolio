import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { ProjectCardComponent } from "../project-card/project-card.component";
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects = {} as Project[];

  constructor(private titleService: Title,
    private projectService: ProjectsService,
    private metaTagService: Meta,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller) {
    this.titleService.setTitle('My Projects');
  }
  ngOnInit(): void {
    this.metaTagService.updateTag({ name: 'description', content: "View all my projects" });
    
    this.metaTagService.updateTag({ property: 'og:title', content: 'Nicholas Parise\'s portfolio - Projects' });
    this.metaTagService.updateTag({ property: 'og:image', content: 'https://nicholasparise.com/assets/projects/mandelbrot.jpg' });
    this.metaTagService.updateTag({ property: 'twitter:image', content: 'https://nicholasparise.com/assets/projects/mandelbrot.jpg' });
    this.metaTagService.updateTag({ property: 'og:image:width', content: '1350' });
    this.metaTagService.updateTag({ property: 'og:image:height', content: '1080' });
    this.metaTagService.updateTag({ property: 'og:image:type', content: 'image/jpeg' });

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
