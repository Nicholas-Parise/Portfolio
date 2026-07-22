import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { Meta } from "@angular/platform-browser"

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-portfolio';  
  
constructor(private metaTageService:Meta){}

  ngOnInit(): void {
    
    this.metaTageService.addTags([
      {name:'keywords',content:'Nicholas Parise, Nicholas, Nick, Parise, Nicholas Parise Portfolio, computer science portfolio Nicholas Parise, Nicholas parise Github, software engineering Nicholas Parise'},
      {name:'robots',content:'index,follow'},
      {name:'author',content:'Nicholas Parise'},
      {name:'description',content:'Hi Im Nicholas Parise and this is my portfolio full of my projects and more!'},
      {name:'viewport',content:'width=device-width, initial-scale=1'},
      {name:'date',content:'2026-07-21', scheme:'YYYY-MM-DD'},
      {charset:'UTF-8'}
    ]);

  }

}
