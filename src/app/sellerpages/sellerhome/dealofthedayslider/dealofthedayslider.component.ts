import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dealofthedayslider',
  templateUrl: './dealofthedayslider.component.html',
  styleUrls: ['./dealofthedayslider.component.css']
})
export class DealofthedaysliderComponent implements OnInit {

  
  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    animateIn: true,
    animateOut: true,
    responsive: {
      0: {
        items: 2.2
      },
      480: {
        items: 3.2
      },
      767: {
        items: 5
      },
      1024: {
        items: 7
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
