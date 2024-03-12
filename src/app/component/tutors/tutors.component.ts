import { Component } from '@angular/core';

@Component({
  selector: 'app-tutors',
  standalone: true,
  imports: [],
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.css'
})
export class TutorsComponent {
  listOfTutors = [
    {
      language: 'English tutors',
      total: '20,101'
    },
    {
      language: 'Spanish tutors',
      total: '6,899'
    },
    {
      language: 'French tutors',
      total: '2,575'
    },
    {
      language: 'German tutors',
      total: '1,158'
    },
    {
      language: 'Italian tutors',
      total: '1,741'
    },
    {
      language: 'Chinese tutors',
      total: '3,269'
    },
    {
      language: 'Arabic tutors',
      total: '2,279'
    },
    {
      language: 'Japanese tutors',
      total: '1,518'
    },
    {
      language: 'Portuguese tutors',
      total: '1,026'
    },
    {
      language: 'Polish tutors',
      total: '274'
    },
    {
      language: 'Dutch tutors',
      total: '151'
    },
    {
      language: 'Urdu tutors',
      total: '345'
    },
    {
      language: 'Greek tutors',
      total: '250'
    },
  ]
}
