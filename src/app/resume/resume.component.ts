import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  constructor(private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle('My Resume');
  }
  ngOnInit(): void {
    this.metaTagService.updateTag({ name: 'description', content: "View My Resume" });

    this.metaTagService.updateTag({ property: 'og:title', content: 'Nicholas Parise\'s portfolio - Resume' });
    this.metaTagService.updateTag({ property: 'og:image', content: 'https://nicholasparise.com/assets/resume-img.png' });
    this.metaTagService.updateTag({ property: 'twitter:image', content: 'https://nicholasparise.com/assets/resume-img.png' });
    this.metaTagService.updateTag({ property: 'og:image:width', content: '932' });
    this.metaTagService.updateTag({ property: 'og:image:height', content: '510' });
    this.metaTagService.updateTag({ property: 'og:image:type', content: 'image/png' });
  }
}
