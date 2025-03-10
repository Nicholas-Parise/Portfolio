import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id:0,name: 'Nixie Tube Clock', summary: 'An arduino controlled retro inspired nixie tube clock with RTC', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Nixie-Tube-Clock',date: 'March 1 2025',pictures: ['../../assets/Nixie-Tube-Clock.jpg','picture2']},
    {id:1,name: 'TicTacToe', summary: 'A networked TicTacToe game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tic-Tac-Toe',date: 'December 13 2024',pictures: ['../../assets/TicTacToe.png','picture2']},
    {id:2,name: 'Video Editor Interface', summary: 'A Video editor interface to demonstrate proper UI/UX design', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Video-Editor-Interface',date: 'April 20 2024',pictures: ['../../assets/Editor/VideoEditor.png','../../assets/Editor/HomePage.png']},
    {id:3,name: 'Traffic Simulator', summary: 'city simulator where AI driven cars navigate roads trying not to crash', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/traffic-Simulator',date: 'April 18 2024',pictures: ['../../assets/traffic.png','picture2']},
    {id:4,name: 'Brock Navigation App', summary: 'An android based google maps inspired campus navigation app', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Brock-Navigation',date: 'April 15 2024',pictures: ['../../assets/Navigation/image001.png','../../assets/Navigation/image002.png']},
    {id:5,name: 'Meeting Scheduler app', summary: 'An android app to make and manage meetings', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Meeting-Scheduler',date: 'March 27 2024',pictures: ['../../assets/Scheduler/image001.png','../../assets/Scheduler/image002.png']},
    {id:6,name: 'Calculator App', summary: 'My first android app, a Calcualtor based on the apple calculator', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Calculator-App',date: 'February 21 2024',pictures: ['../../assets/Calculator/Calc-V.png','../../assets/Calculator/Calc-H.png']},
    {id:7,name: 'Connect 4', summary: 'A networked Connect four game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Connect-Four',date: 'July 3 2023',pictures: ['../../assets/Connect4.png','picture2']},
    {id:8,name: 'Pacman', summary: 'A C++ SFML Pacman clone', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/PacMan',date: 'June 15 2022',pictures: ['../../assets/Pacman.png','picture2']},
    {id:9,name: 'Tetris', summary: 'A java Jpanel clone of classic Tetris', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tetris-Java',date: 'January 13 2022',pictures: ['../../assets/tetris.png','picture2']}
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
