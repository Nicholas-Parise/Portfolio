import { Injectable } from '@angular/core';
import { Skill } from '../_models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skill[] = [
    { name: 'C++', icon: 'cpp-icon' },
    { name: 'Java', icon: 'java-icon' },
    { name: 'Python', icon: 'python-icon' },
    { name: 'PSQL', icon: 'sql-icon' },
    { name: 'CSS', icon: 'css-icon' },
    { name: 'HTML', icon: 'html-icon' },
    { name: 'Javascript', icon: 'js-icon' },
    { name: 'Typescript', icon: 'typescript-icon' },
    { name: 'Angular', icon: 'angular-icon' },
    { name: 'React', icon: 'react-icon' },
    { name: 'Node js', icon: 'node-icon' },
    { name: 'Arduino', icon: 'arduino-icon' },
    { name: 'Android', icon: 'android-icon' },
    { name: 'Automate', icon: 'powerAuto-icon' },
    { name: 'Git', icon: 'git-icon' },
    { name: 'Numpy', icon: 'numpy-icon' },
    { name: 'SFML', icon: 'sfml-icon' }
  ];

  /*
  { name: '', icon: '' },
  */
  constructor() { }

  GetSkills() {
    return this.skills;
  }

  GetSkillByName(name: string): Skill {
    let skill = this.skills.find(skills => skills.name == name);

    if (!skill) {
      throw new TypeError('Skill does not exist');
    }
    return skill;
  }

}
