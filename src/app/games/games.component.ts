import { Component } from '@angular/core';
import { FlashPlayerComponent } from '../flash-player/flash-player.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [FlashPlayerComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
