import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Title} from '@angular/platform-browser'
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';
import { Meta } from "@angular/platform-browser"
import { SkillsService } from '../_services/skills.service';
import { Skill } from '../_models/Skill';
import { SkillCardComponent } from '../skill-card/skill-card.component';


@Component({
    selector: 'app-home',
    imports: [RouterModule, SkillCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  featuredProject = {} as Project;
  skills = {} as Skill[];
  
  constructor(private titleService: Title, private projectService: ProjectsService, private metaTagService: Meta, private skillsService:SkillsService){
    this.titleService.setTitle('My Portfolio');
  }
  
  ngOnInit(): void {
    this.featuredProject = this.projectService.getRandom();
    this.skills = this.skillsService.GetSkills();

    this.metaTagService.updateTag({name:'description', content:"Hi Im Nicholas Parise and this is my portfolio full of my projects and more!"});
    this.metaTagService.updateTag({property: 'og:title', content: 'Nicholas Parise\'s portfolio - Home' });
  }


  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

}
