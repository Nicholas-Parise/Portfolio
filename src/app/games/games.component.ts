import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RouterModule } from '@angular/router';

import { FlashPlayerComponent } from '../flash-player/flash-player.component';
import { JarPlayerComponent } from '../jar-player/jar-player.component';
import { GameCardComponent } from '../game-card/game-card.component';

import { Game } from '../_models/Game';
import { GamesService } from '../_services/games.service';

@Component({
    selector: 'app-games',
    imports: [FlashPlayerComponent, JarPlayerComponent, GameCardComponent, RouterModule],
    templateUrl: './games.component.html',
    styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {

    constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

    game: string | null = null;

    selectedGame?: Game;
    games: Game[] = [];

    ngOnInit(): void {
        this.games = this.gamesService.Get();

        this.route.paramMap.subscribe(params => {

            const id = params.get('id');

            if (id) {
                this.selectedGame = this.gamesService.GetByName(id);
                console.log(this.selectedGame);
            } else {
                this.selectedGame = undefined;
            }

        });



    }


}
