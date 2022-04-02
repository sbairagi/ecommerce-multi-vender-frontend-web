import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  width = 'width : 0px;'

  constructor(private apiservice: ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  closeNav(){
    this.width = 'width : 0px';
  }

  openNav(){
    this.width = 'width : 250px';
  }

  logout(){
    this.apiservice.approvedsellerOrAuthicated.next(false)
    this.apiservice.authState.next(false)
    this.router.navigate(['/user/home'])
    this.apiservice.logout();
    localStorage.clear();

  }

}
