import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Meta } from "@angular/platform-browser"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  featuredProject = {} as Project;
  
  constructor(private titleService: Title, private projectService: ProjectsService, private metaTagService: Meta){
    this.titleService.setTitle('Home');
  }
  
  ngOnInit(): void {
    this.featuredProject = this.projectService.getRandom();

    this.metaTagService.updateTag(
      {name:'description', content:"Hi Im Nicholas Parise and this is my portfolio full of my projects and more!"}
    );

  }
}
