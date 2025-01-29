import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateModule} from "@ngx-translate/core";
@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
  skills: string[] = ["Angular", "TypeScript", "JavaScript", "HTML", "Scrum", "Firebase", "Git", "CSS", "Rest Api", "Material Design"];


}
