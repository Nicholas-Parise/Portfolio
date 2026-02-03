import { Component, Input } from '@angular/core';
import { Skill } from '../_models/Skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skill = {} as Skill
  @Input() tiny: boolean = false

}
