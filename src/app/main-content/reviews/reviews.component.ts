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
        name: "Sascha Töpfer",
        project: "DABubble",
        text: "reviews.review-3"
      },
      {
        name: "Mariia Ivanova",
        project: "Join",
        text: "reviews.review-2"
      }
    ]
  }
}
