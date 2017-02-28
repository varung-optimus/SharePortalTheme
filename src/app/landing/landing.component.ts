import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public activeImages = [
    'app/img/realestate/1.png',
    'app/img/realestate/2.png',
    'app/img/realestate/3.png',
    'app/img/realestate/4.png',
    'app/img/realestate/5.png',
  ];
  public items;
  public activeImageIndex = 0;
  public activeImage = this.activeImages[this.activeImageIndex];
  constructor() { }

  ngOnInit() {
    this.items = [
      { year: 2010, img: '1', name: 'Avengers Civil War' },
      { year: 2015, img: '2', name: 'Superbike game' },
      { year: 2012, img: '3', name: 'Fifa 2016' },
      { year: 1998, img: '4', name: 'Assasin Creed' },
      { year: 2010, img: '1', name: 'Avengers Civil War' },
      { year: 2015, img: '2', name: 'Superbike game' },
      { year: 2012, img: '3', name: 'Fifa 2016' },
      { year: 1998, img: '4', name: 'Assasin Creed' },
    ];

    setInterval(() => {
      this.activeImage = this.activeImages[this.activeImageIndex];
      this.activeImageIndex++;
      if (this.activeImageIndex > 3) {
        this.activeImageIndex = 0;
      }
    }, 4000);
  }

}
