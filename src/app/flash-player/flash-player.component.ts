import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

@Component({
  selector: 'app-flash-player',
  standalone: true,
  imports: [],
  template: `<div #container></div>`,
  styleUrl: './flash-player.component.css'
})
export class FlashPlayerComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    await this.loadScript('/assets/ruffle/ruffle.js');

    const ruffle = (window as any).RufflePlayer.newest();
    const player = ruffle.createPlayer();

    player.style.width = '800px';
    player.style.height = '600px';
    player.tabIndex = 0;

    this.container.nativeElement.appendChild(player);
    player.load('/assets/games/Galaga.swf');
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
