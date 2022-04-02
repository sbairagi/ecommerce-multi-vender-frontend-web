import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // islogin = false


  // constructor(private apiservice: ApiService, private router: Router) { 
  //     this.apiservice.authState.subscribe(data => {
  //       this.islogin = data;
  //     })
  //     this.apiservice.approvedsellerOrAuthicated.subscribe(data => {
  //       this.islogin = data
  //     })
  // }

  // ngOnInit() {
    
    
  // }

  // logout(){
  //   this.apiservice.logout();
  //   let a = <HTMLButtonElement>document.getElementById('closesellerModal');
  //   let b = <HTMLButtonElement>document.getElementById('menu-button');
  //   b.click();
  //   a.click();
  //   this.router.navigate(['/user/home'])
  // }

  width = 'width : 0px;'

  islogin = false


  constructor(private apiservice: ApiService, private router: Router) { 
      this.apiservice.authState.subscribe(data => {
        this.islogin = data;
      })
      this.apiservice.approvedsellerOrAuthicated.subscribe(data => {
        this.islogin = data
      })
  }

  ngOnInit() {
    
    
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
    localStorage.clear()

  }


}
