import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project

  gifLoaded = false;

  get hasGif(): boolean {
    const secondPic = this.project.pictures?.[1];
    return !!secondPic && secondPic.toLowerCase().endsWith('.gif');
  }

  onGifLoad() {
    this.gifLoaded = true;
  }

  slugify(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }

}
