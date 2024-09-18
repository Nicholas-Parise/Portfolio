import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  constructor(private titleService: Title,private metaTagService: Meta){
    this.titleService.setTitle('About Me');
  }

  ngOnInit(): void {
    this.metaTagService.updateTag(
      {name:'description', content:"Everything about me"}
    );
  }
}


