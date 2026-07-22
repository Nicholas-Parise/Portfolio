import { Injectable } from '@angular/core';
import { Game } from '../_models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: Game[] = [
    { name: 'Tetris', description: 'A java Jpanel clone of classic Tetris', file: '/app/assets/games/Tetris.jar', type: 'jar', date: 'January 2021', pictures: '../../assets/projects/tetris.png' },
    { name: 'Galaga', description: 'Galaga Flash game I made in highschool', file: '/assets/games/Galaga.swf', type: 'swf', date: 'January 2018', pictures: '../../assets/projects/galaga.png' },
    { name: 'BalloonShooter', description: 'A simple balloon shooter game', file: '/assets/games/BalloonShooter.swf', type: 'swf', date: 'October 2017', pictures: '../../assets/projects/BalloonShooter.png' }    
    
  ];

  /*
      name: string;
      description: string;
      file: string;
      type: 'jar' | 'swf';
      date: string;
      pictures: string;
   */

  Get() {
    return this.games;
  }


  GetByName(name: string): Game {
    let game = this.games.find(games => games.name == name);

    if (!game) {
      throw new TypeError('game does not exist');
    }
    return game;
  }


}
