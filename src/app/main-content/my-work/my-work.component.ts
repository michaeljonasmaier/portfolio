import { Component } from '@angular/core';
import { WorkingExample } from '../../interfaces/working-example';
import { WorkingExampleComponent } from '../working-example/working-example.component';
import {TranslatePipe, TranslateDirective, TranslateModule, TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [WorkingExampleComponent, TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  workingExamplesArr: WorkingExample [];

  constructor(private translate: TranslateService){
    this.workingExamplesArr = [
      {
        imgPath: "/assets/my-work/DABubble.png",
        title: "DABubble",
        software: ["Angular", "TypeScript", "HTML", "CSS", "Firebase"],
        description: "working-examples.dabubble",
        reverse: false,
        link: "https://github.com/SasToepfer/dabubble",
        testlink: "https://join.maiermichael.com/#/",
        comingsoon: true,
      },
      {
        imgPath: "/assets/my-work/Join.png",
        title: "Join",
        software: ["Angular", "TypeScript", "HTML", "CSS", "Firebase"],
        description: "working-examples.join",
        reverse: true,
        link: "https://github.com/michaeljonasmaier/Join",
        testlink: "https://join.maiermichael.com/#/"
      },
      {
        imgPath: "/assets/my-work/Pokedex.png",
        title: "Pokedex",
        software: ["JavaScript", "HTML", "CSS", "Api"],
        description: "working-examples.pokedex",
        reverse: false,
        link: "https://github.com/michaeljonasmaier/Pokedex",
        testlink: "https://pokedex.maiermichael.com"
      },
      {
        imgPath: "/assets/my-work/Pollo Loco.png",
        title: "Pollo Loco",
        software: ["JavaScript", "HTML", "CSS"],
        description: "working-examples.elpolloloco",
        reverse: true,
        link: "https://github.com/michaeljonasmaier/El-Pollo-Loco",
        testlink: "https://elpolloloco.maiermichael.com"
      }
    ]
  }
}
