import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews-rating',
  standalone: true,
  imports: [],
  templateUrl: './reviews-rating.component.html',
  styleUrl: './reviews-rating.component.css'
})
export class ReviewsRatingComponent {
  reviews = [
    {
      count: '32,000+',
      text: 'Experienced tutors'
    },
    {
      count: '300,000+',
      text: '5-star tutor reviews'
    },
    {
      count: '120+',
      text: 'Subjects taught'
    },
    {
      count: '180+',
      text: 'Tutor nationalities'
    },
    {
      count: '4.8',
      rating: true,
      text: 'on the App Store'
    }
  ]
}
