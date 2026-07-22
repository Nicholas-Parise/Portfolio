import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-flash-player',
  imports: [],
  template: `<div #container></div>`,
  styles: [`#container { width: 800px; height: 600px; }`]
})
export class FlashPlayerComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  @Input() file: string = '/assets/games/Galaga.swf';

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  private player: any;
  private initialized = false;
  private ruffle: any;

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    await this.loadScript('/assets/ruffle/ruffle.js');

    this.ruffle = (window as any).RufflePlayer.newest();
    
    this.initialized = true;

    this.loadGame();
  }

  private loadGame() {

    this.player = this.ruffle.createPlayer();

    this.player.style.width = '800px';
    this.player.style.height = '600px';
    this.player.tabIndex = 0;

    this.container.nativeElement.appendChild(this.player);

    this.player.load(this.file);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (!this.initialized)
      return;

    if (changes['file']) {
      this.loadGame();
    }
  }


  private loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(`Failed to load ${src}`);
      document.body.appendChild(script);
    });
  }

}
