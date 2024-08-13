import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']},
    {id:1,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']},
    {id:2,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']},
    {id:3,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']}
  ];
  

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id:number) : Project{
    let project = this.projects.find(project => project.id == id);
    
    if(project === undefined){
      throw new TypeError('index Does not exist');
    }
    
    return project;
  }

}
