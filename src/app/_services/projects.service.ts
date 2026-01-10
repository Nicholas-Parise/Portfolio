import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    
    {id:0,name: 'MNIST Digit Classifier', summary: 'Custom Python CNN MNIST Digit Classifier', description: 'MNIST Digit Classifier',projectLink: 'https://github.com/sutterismine1/MNIST-digit-classification-4P80-group8',date: 'December 2025',pictures: ['../../assets/projects/MNIST_7.png','../../assets/projects/MNIST.gif']},
    {id:1,name: 'WikiRace', summary: 'A graph based Wikipedia solver', description: 'A graph based Wikipedia solver',projectLink: 'https://github.com/Nicholas-Parise/WikiRace',date: 'November 2025',pictures: ['../../assets/projects/WikiRace.jpg']},

    {id:2,name: 'Gravity Simulator', summary: 'A C++ particle physics simulator that can easily handle 100,000+ particles', description: 'A C++ particle simulator',projectLink: 'https://github.com/Nicholas-Parise/Gravity-Sim',date: 'August 2025',pictures: ['../../assets/projects/Gravity.png','../../assets/projects/Gravity.gif']},
    {id:3,name: 'Wishify', summary: 'Full Stack collaborative wishlist platform. I acted as the product owner and lead backend in a small team', description: 'collaborative wishlist platform',projectLink: 'https://github.com/Nicholas-Parise/4P02-course-project',date: 'April 2025',pictures: ['../../assets/projects/Wishify-Interface.png']},
    {id:4,name: 'Mandelbrot Viewer', summary: 'A C++ mandelbrot viewer using GLSL fragment sharders', description: 'A GLSL sharder mandelbrot viewer',projectLink: 'https://github.com/Nicholas-Parise/mandelbrot',date: 'April 2025',pictures: ['../../assets/projects/mandelbrot.jpg']},
    {id:5,name: 'Nixie Tube Clock', summary: 'arduino controlled nixie tube clock with RTC', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Nixie-Tube-Clock',date: 'March 2025',pictures: ['../../assets/projects/Nixie-Tube-Clock.jpg']},
    {id:6,name: 'TicTacToe', summary: 'A networked TicTacToe game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tic-Tac-Toe',date: 'December 2024',pictures: ['../../assets/projects/TicTacToe.png']},
    {id:7,name: 'Class Scheduler', summary: 'Genetic Algorithms and their application in creating university class schedules', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/class-scheduling/',date: 'November 2024',pictures: ['../../assets/projects/AverageFitness-T1.png']},
    {id:8,name: 'This portfolio', summary: 'A portfolio built in Angular', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Portfolio',date: 'August 2024',pictures: ['../../assets/projects/inception.png']},
    {id:9,name: 'Video Editor Interface', summary: 'A Video editor interface to demonstrate proper UI/UX design', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Video-Editor-Interface',date: 'April 2024',pictures: ['../../assets/projects/Editor/VideoEditor.png']},
    {id:10,name: 'Traffic Simulator', summary: 'city simulator where AI driven cars navigate roads trying not to crash', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/traffic-Simulator',date: 'April 2024',pictures: ['../../assets/projects/traffic.png']},
    {id:11,name: 'Brock Navigation App', summary: 'An android based google maps inspired campus navigation app', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Brock-Navigation',date: 'April 2024',pictures: ['../../assets/projects/Navigation/image001.png','../../assets/projects/Navigation/moving_crop.gif']},
    {id:12,name: 'Meeting Scheduler App', summary: 'An android app to make and manage meetings', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Meeting-Scheduler',date: 'March 2024',pictures: ['../../assets/projects/Scheduler/Scheduler.png']},
    {id:13,name: 'Calculator App', summary: 'a calculator based on the apple calculator', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Calculator-App',date: 'February 2024',pictures: ['../../assets/projects/Calculator/Calc-H.png']},
    {id:14,name: 'Connect 4', summary: 'A networked Connect four game written in java', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Connect-Four',date: 'July 2023',pictures: ['../../assets/projects/Connect4.png']},
    {id:15,name: 'Pacman', summary: 'A C++ SFML Pacman clone', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/PacMan',date: 'June 2022',pictures: ['../../assets/projects/Pacman.png']},
    {id:16,name: 'Tetris', summary: 'A java Jpanel clone of classic Tetris', description: 'description',projectLink: 'https://github.com/Nicholas-Parise/Tetris-Java',date: 'January 2021',pictures: ['../../assets/projects/tetris.png']}
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
