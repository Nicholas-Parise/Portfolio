import { Component, Input } from '@angular/core';
import { Game } from '../_models/Game';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-card',
  imports: [RouterLink],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {
  @Input({ required: true })
  game!: Game;
}
