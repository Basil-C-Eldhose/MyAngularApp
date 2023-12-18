import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  district=[
    {
      id:1,
      title:"Trivandrum",
      image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a9/f3/43/great-views.jpg"
    },
    {
      id:2,
      title:"Kollam",
      image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a9/f3/43/great-views.jpg"
    },
    {
      id:3,
      title:"Pathanamthitta",
      image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a9/f3/43/great-views.jpg"
    },
    {
      id:4,
      title:"Alappuzha",
      image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0e/a9/f3/43/great-views.jpg"
    }
  ]
}
