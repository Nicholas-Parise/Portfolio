import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0,name: 'Wishify', summary: 'Full Stack collaborative wishlist platform', description: 'collaborative wishlist platform',projectLink: 'https://github.com/Nicholas-Parise/4P02-course-project',date: 'April 2025',pictures: ['../../assets/Wishify-Interface.png','picture2']},
    {id:1,name: 'Mandelbrot viewer', summary: 'A C++ mandelbrot viewer using GLSL fragment sharders', description: 'A GLSL sharder mandelbrot viewer',projectLink: 'https://github.com/Nicholas-Parise/mandelbrot',date: 'April 2025',pictures: ['../../assets/mandelbrot.png','picture2']},
    {id:2,name: 'Nixie Tube Clock', summary: 'arduino controlled nixie tube clock with RTC', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Nixie-Tube-Clock',date: 'March 2025',pictures: ['../../assets/Nixie-Tube-Clock.jpg','picture2']},
    {id:3,name: 'TicTacToe', summary: 'A networked TicTacToe game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tic-Tac-Toe',date: 'December 2024',pictures: ['../../assets/TicTacToe.png','picture2']},
    {id:4,name: 'Video Editor Interface', summary: 'A Video editor interface to demonstrate proper UI/UX design', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Video-Editor-Interface',date: 'April 2024',pictures: ['../../assets/Editor/VideoEditor.png','../../assets/Editor/HomePage.png']},
    {id:5,name: 'Traffic Simulator', summary: 'city simulator where AI driven cars navigate roads trying not to crash', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/traffic-Simulator',date: 'April 2024',pictures: ['../../assets/traffic.png','picture2']},
    {id:6,name: 'Brock Navigation App', summary: 'An android based google maps inspired campus navigation app', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Brock-Navigation',date: 'April 2024',pictures: ['../../assets/Navigation/image001.png','../../assets/Navigation/image002.png']},
    {id:7,name: 'Meeting Scheduler app', summary: 'An android app to make and manage meetings', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Meeting-Scheduler',date: 'March 2024',pictures: ['../../assets/Scheduler/image001.png','../../assets/Scheduler/image002.png']},
    {id:8,name: 'Calculator App', summary: 'a calculator based on the apple calculator', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Calculator-App',date: 'February 2024',pictures: ['../../assets/Calculator/Calc-V.png','../../assets/Calculator/Calc-H.png']},
    {id:9,name: 'Connect 4', summary: 'A networked Connect four game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Connect-Four',date: 'July 2023',pictures: ['../../assets/Connect4.png','picture2']},
    {id:10,name: 'Pacman', summary: 'A C++ SFML Pacman clone', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/PacMan',date: 'June 2022',pictures: ['../../assets/Pacman.png','picture2']},
    {id:11,name: 'Tetris', summary: 'A java Jpanel clone of classic Tetris', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tetris-Java',date: 'January 2022',pictures: ['../../assets/tetris.png','picture2']}
  ];
  //written
  //{id:5,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']}

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

  getRandom(): Project{
    return this.GetProjectById(Math.floor(Math.random() * this.projects.length));
  }



}
