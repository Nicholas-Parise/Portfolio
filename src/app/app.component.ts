import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { Meta } from "@angular/platform-browser"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-portfolio';  
  
constructor(private metaTageService:Meta){}

  ngOnInit(): void {
    
    this.metaTageService.addTags([
      {name:'keywords',content:'Nicholas Parise, Nicholas Parise Portfolio, computer science portfolio Nicholas Parise, Angular portfolio Nicholas Parise, Angular, Angular portfolio, Nicholas parise Github, software engineering Nicholas Parise'},
      {name:'robots',content:'index,follow'},
      {name:'author',content:'Nicholas Parise'},
      {name:'description',content:'Hi Im Nicholas Parise and this is my portfolio full of my projects and more!'},
      {name:'viewport',content:'width=device-width, initial-scale=1'},
      {name:'date',content:'2024-09-18', scheme:'YYYY-MM-DD'},
      {charset:'UTF-8'}
    ]);

  }

}
