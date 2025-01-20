import { Component } from '@angular/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  skills: string[] = ["Angular", "TypeScript", "JavaScript", "HTML", "Scrum", "Firebase", "Git", "CSS", "Rest Api", "Material Design"];


}
