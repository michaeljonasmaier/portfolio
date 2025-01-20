import { Component } from '@angular/core';
import { ReviewInterface } from '../../interfaces/review-interface';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviewsArr: ReviewInterface[];

  constructor(){
    this.reviewsArr = [
      {
        name: "James Rugman",
        project: "Join",
        text: "‘‘Sofia is a reliable and friendly person. Work in a structured way and write a clear code. I  highly recommend her as a colleague.’’"
      },
      {
        name: "Evelyn Marx",
        project: "Pokedex",
        text: "‘‘Sofia is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.‘’"
      },
      {
        name: "Noah Müller",
        project: "Pollo Loco",
        text: "‘’Sofia  had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.’’"
      }
    ]
  }
}
