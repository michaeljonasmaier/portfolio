import { Component } from '@angular/core';
import { ReviewInterface } from '../../interfaces/review-interface';
import {TranslatePipe, TranslateDirective, TranslateModule, TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [TranslatePipe, TranslateDirective, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviewsArr: ReviewInterface[];

  constructor(private translate: TranslateService){
    this.reviewsArr = [
      {
        name: "Marcel Steffen",
        project: "Kochwelt",
        text: "reviews.review-1"
      },
      {
        name: "Mariia Ivanova",
        project: "Join",
        text: "reviews.review-2"
      },
      {
        name: "Noah Müller",
        project: "Pollo Loco",
        text: "reviews.review-3"
      }
    ]
  }
}
