import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title, private metaTagService: Meta) {
    this.titleService.setTitle('About Me');
  }
  ngOnInit(): void {
    this.metaTagService.updateTag({ name: 'description', content: "Everything about me" });

    this.metaTagService.updateTag({ property: 'og:title', content: 'Nicholas Parise\'s portfolio - About' });
    this.metaTagService.updateTag({ property: 'og:image', content: 'https://nicholasparise.com/assets/sleeping_dog.jpg' });
    this.metaTagService.updateTag({ property: 'twitter:image', content: 'https://nicholasparise.com/assets/sleeping_dog.jpg' });
    this.metaTagService.updateTag({ property: 'og:image:width', content: '711' });
    this.metaTagService.updateTag({ property: 'og:image:height', content: '400' });
    this.metaTagService.updateTag({ property: 'og:image:type', content: 'image/jpeg' });
  }
}


