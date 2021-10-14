import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  


  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
  }



}
