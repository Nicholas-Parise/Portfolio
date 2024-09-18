import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser'
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit{
    constructor(private titleService: Title, private metaTagService: Meta){
      this.titleService.setTitle('Resume');
    }
  ngOnInit(): void {
    this.metaTagService.updateTag(
      {name:'description', content:"View My Resume"}
    );
  }
}
