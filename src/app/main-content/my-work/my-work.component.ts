import { Component } from '@angular/core';
import { WorkingExample } from '../../interfaces/working-example';
import { WorkingExampleComponent } from '../working-example/working-example.component';


@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [WorkingExampleComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {
  workingExamplesArr: WorkingExample [];

  constructor(){
    this.workingExamplesArr = [
      {
        imgPath: "/assets/my-work/Join.png",
        title: "Join",
        software: ["Angular", "TypeScript", "HTML", "CSS", "Firebase"],
        description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
        reverse: false,
        link: "https://github.com/michaeljonasmaier/DANotes",
      },
      {
        imgPath: "/assets/my-work/Pokedex.png",
        title: "Pokedex",
        software: ["JavaScript", "HTML", "CSS", "Api"],
        description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
        reverse: true,
        link: "https://github.com/michaeljonasmaier/Pokedex",
      },
      {
        imgPath: "/assets/my-work/Pollo Loco.png",
        title: "Pollo Loco",
        software: ["JavaScript", "HTML", "CSS"],
        description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
        reverse: false,
        link: "https://github.com/michaeljonasmaier/El-Pollo-Loco",
      }
    ]
  }
}
