import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [

    { id: 0, name: 'Handwritten Digit Classifier', summary: 'Custom from scratch Python CNN MNIST Digit Classifier only using Numpy', description: 'MNIST Digit Classifier', projectLink: 'https://github.com/sutterismine1/MNIST-digit-classification-4P80-group8', liveLink: null, date: 'December 2025', pictures: ['../../assets/projects/MNIST_7.png', '../../assets/projects/MNIST.gif'],skills: [this.skillsService.GetSkillByName("Python"), this.skillsService.GetSkillByName("Numpy")] },
    { id: 1, name: 'WikiRace', summary: 'A C++ graph based Wikipedia solver to find paths between articles, using OPENMP and OPENMPI for speed', description: 'A graph based Wikipedia solver', projectLink: 'https://github.com/Nicholas-Parise/WikiRace', liveLink: null, date: 'November 2025', pictures: ['../../assets/projects/WikiRace.jpg'],skills: [this.skillsService.GetSkillByName("C++"), this.skillsService.GetSkillByName("PSQL"),this.skillsService.GetSkillByName("SFML")] },
    { id: 2, name: 'SOM', summary: 'Self-Organizing Maps (SOM) in Python only using Numpy', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/SOM-Networks-for-motor-validation', liveLink: null, date: 'November 2025', pictures: ['../../assets/projects/SOM.png'], skills: [this.skillsService.GetSkillByName("Python"), this.skillsService.GetSkillByName("Numpy")]  },
    { id: 3, name: 'FF Neural Net', summary: 'Feed forward neural network in Python only using Numpy', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Feed-Forward-Networks-for-motor-validation', liveLink: null, date: 'October 2025', pictures: ['../../assets/projects/FFNN.png'], skills: [this.skillsService.GetSkillByName("Python"), this.skillsService.GetSkillByName("Numpy")]  },
    { id: 4, name: 'Gravity Simulator', summary: 'A C++ particle physics simulator that can easily handle 100,000+ particles', description: 'A C++ particle simulator', projectLink: 'https://github.com/Nicholas-Parise/Gravity-Sim', liveLink: null, date: 'August 2025', pictures: ['../../assets/projects/Gravity.png', '../../assets/projects/Gravity.gif'],skills: [this.skillsService.GetSkillByName("C++"),this.skillsService.GetSkillByName("SFML")] },
    { id: 5, name: 'Wishify', summary: 'Full Stack collaborative wishlist platform. I acted as the product owner and lead backend in a small team', description: 'collaborative wishlist platform', projectLink: 'https://github.com/Nicholas-Parise/4P02-course-project', liveLink: 'https://www.wishify.ca/', date: 'April 2025', pictures: ['../../assets/projects/Wishify-Interface.png'],skills: [this.skillsService.GetSkillByName("React"),this.skillsService.GetSkillByName("Node js"),this.skillsService.GetSkillByName("PSQL")] },
    { id: 6, name: 'Mandelbrot Viewer', summary: 'A C++ mandelbrot viewer using GLSL fragment sharders', description: 'A GLSL sharder mandelbrot viewer', projectLink: 'https://github.com/Nicholas-Parise/mandelbrot', liveLink: null, date: 'April 2025', pictures: ['../../assets/projects/mandelbrot.jpg'],skills: [this.skillsService.GetSkillByName("C++"),this.skillsService.GetSkillByName("SFML")] },
    { id: 7, name: 'Nixie Tube Clock', summary: 'arduino controlled nixie tube clock with RTC', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Nixie-Tube-Clock', liveLink: null, date: 'March 2025', pictures: ['../../assets/projects/Nixie-Tube-Clock.jpg'],skills: [this.skillsService.GetSkillByName("C++"),this.skillsService.GetSkillByName("Arduino")] },
    { id: 8, name: 'TicTacToe', summary: 'A fully networked TicTacToe game written in java', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Tic-Tac-Toe', liveLink: null, date: 'December 2024', pictures: ['../../assets/projects/TicTacToe.png'],skills: [this.skillsService.GetSkillByName("Java")] },
    { id: 9, name: 'Class Scheduler', summary: 'Genetic Algorithms and their application in creating university class schedules', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/class-scheduling/', liveLink: null, date: 'November 2024', pictures: ['../../assets/projects/AverageFitness-T1.png'],skills: [this.skillsService.GetSkillByName("Java")] },
    { id: 10, name: 'This portfolio', summary: 'A portfolio built in Angular', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Portfolio', liveLink: 'https://nicholasparise.com/', date: 'August 2024', pictures: ['../../assets/projects/inception.png'],skills: [this.skillsService.GetSkillByName("Angular"),this.skillsService.GetSkillByName("Typescript")] },
    { id: 11, name: 'Video Editor Interface', summary: 'A Video editor interface built in pure HTML and CSS to demonstrate proper UI/UX design', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Video-Editor-Interface', liveLink: "https://nicholas-parise.github.io/Video-Editor-Interface", date: 'April 2024', pictures: ['../../assets/projects/Editor/VideoEditor.png'],skills: [this.skillsService.GetSkillByName("HTML"),this.skillsService.GetSkillByName("CSS"),this.skillsService.GetSkillByName("Javascript")] },
    { id: 12, name: 'Traffic Simulator', summary: 'city simulator where AI driven cars navigate roads trying not to crash', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/traffic-Simulator', liveLink: null, date: 'April 2024', pictures: ['../../assets/projects/traffic.png'],skills: [this.skillsService.GetSkillByName("Java")] },
    { id: 13, name: 'Brock Navigation App', summary: 'An android based google maps inspired campus navigation app', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Brock-Navigation', liveLink: null, date: 'April 2024', pictures: ['../../assets/projects/Navigation/image001.png', '../../assets/projects/Navigation/moving_crop.gif'],skills: [this.skillsService.GetSkillByName("Android"),this.skillsService.GetSkillByName("Java")] },
    { id: 14, name: 'Meeting Scheduler App', summary: 'An android app to make and manage meetings', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Meeting-Scheduler', liveLink: null, date: 'March 2024', pictures: ['../../assets/projects/Scheduler/Scheduler.png'],skills: [this.skillsService.GetSkillByName("Android"),this.skillsService.GetSkillByName("Java")] },
    { id: 15, name: 'Calculator App', summary: 'a calculator based on the apple calculator', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Calculator-App', liveLink: null, date: 'February 2024', pictures: ['../../assets/projects/Calculator/Calc-H.png'],skills: [this.skillsService.GetSkillByName("Android"),this.skillsService.GetSkillByName("Java")] },
    { id: 16, name: 'Connect 4', summary: 'A networked Connect four game written in java', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Connect-Four', liveLink: null, date: 'July 2023', pictures: ['../../assets/projects/Connect4.png'],skills: [this.skillsService.GetSkillByName("Java")] },
    { id: 17, name: 'Pacman', summary: 'A C++ SFML Pacman clone', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/PacMan', liveLink: null, date: 'June 2022', pictures: ['../../assets/projects/Pacman.png'],skills: [this.skillsService.GetSkillByName("C++"),this.skillsService.GetSkillByName("SFML")] },
    { id: 18, name: 'Tetris', summary: 'A java Jpanel clone of classic Tetris', description: 'description', projectLink: 'https://github.com/Nicholas-Parise/Tetris-Java', liveLink: null, date: 'January 2021', pictures: ['../../assets/projects/tetris.png'],skills: [this.skillsService.GetSkillByName("Java")] },
    { id: 19, name: 'Galaga', summary: 'Galaga Flash game I made in highschool', description: 'description', projectLink: null, liveLink: '/games', date: 'January 2018', pictures: ['../../assets/projects/galaga.png'],skills: [] }
  ];
  //written
  //{id:5,name: 'name', summary: 'summary', description: 'description',projectLink: 'link',date: 'date',pictures: ['picture1','picture2']}

  constructor(private skillsService:SkillsService) { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id == id);

    if (project === undefined) {
      throw new TypeError('index Does not exist');
    }

    return project;
  }

  getRandom(): Project {
    return this.GetProjectById(Math.floor(Math.random() * (this.projects.length-1)));
  }



}
