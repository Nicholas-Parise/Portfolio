import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'

declare global {
  interface Window {
    cheerpjInitialized?: boolean;
  }
}

@Component({
  selector: 'app-jar-player',
  imports: [],
  template: '<div #javaDisplay id="cheerpj-display"></div>',
  styles: [`#cheerpj-display { width: 800px; height: 600px; }`]
})
export class JarPlayerComponent implements AfterViewInit {
  @ViewChild('javaDisplay', { static: true }) javaDisplay!: ElementRef;

  @Input() file: string = '/app/assets/games/Tetris.jar';

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  async ngAfterViewInit() {

    if (!isPlatformBrowser(this.platformId)) return;
    try {
      // Initialize
      if (!window.cheerpjInitialized) {
        await cheerpjInit( {enableDebug: true});

        window.cheerpjInitialized = true;
      }

      // Bind to your Angular element
      cheerpjCreateDisplay(800, 600, this.javaDisplay.nativeElement);

      try {
        const result = await cheerpjRunJar(this.file);
        console.log("Jar exit code:", result);
      } catch (e) {
        console.error("Jar failed:", e);
      }

      console.log('Java application successfully started');
    } catch (error) {
      console.error('Failed to initialize CheerpJ:', error);
    }
  }

}
