import { Component } from '@angular/core';
import { ReviewsRatingComponent } from '../../component/reviews-rating/reviews-rating.component';
import { TutorsComponent } from '../../component/tutors/tutors.component';
import { Jumbo1Component } from '../../component/jumbo1/jumbo1.component';
import { BigCardComponent } from '../../component/big-card/big-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReviewsRatingComponent,TutorsComponent,Jumbo1Component,BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
