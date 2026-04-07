import { Component, Input } from '@angular/core';
import { Skill } from '../_models/Skill';


@Component({
    selector: 'app-skill-card',
    imports: [],
    templateUrl: './skill-card.component.html',
    styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() skill = {} as Skill
  @Input() tiny: boolean = false

}
