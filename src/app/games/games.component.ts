import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Title } from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser';

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

    constructor(private route: ActivatedRoute, private gamesService: GamesService, private titleService: Title, private metaTagService: Meta) {
        this.titleService.setTitle('My Games');
    }

    game: string | null = null;

    selectedGame?: Game;
    games: Game[] = [];

    ngOnInit(): void {

        this.metaTagService.updateTag({ name: 'description', content: "All my games" });

        this.metaTagService.updateTag({ property: 'og:title', content: 'Nicholas Parise\'s portfolio - Games' });
        this.metaTagService.updateTag({ property: 'og:image', content: 'https://nicholasparise.com/assets/projects/galaga.png' });
        this.metaTagService.updateTag({ property: 'twitter:image', content: 'https://nicholasparise.com/assets/projects/galaga.png' });
        this.metaTagService.updateTag({ property: 'og:image:width', content: '795' });
        this.metaTagService.updateTag({ property: 'og:image:height', content: '594' });
        this.metaTagService.updateTag({ property: 'og:image:type', content: 'image/png' });

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
