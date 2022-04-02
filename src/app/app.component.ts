import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopingweb';
  
  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.apiService.isAuthenticated();
    this.apiService.isAuthenticatedOrApprovedSeller();
    // const token = this.cookieService.get('authToken');
    const token = localStorage.getItem('authToken');
    if (token){
      const decode = this.apiService.parseJwt(token)
      const accountType = localStorage.getItem('accounttype');
      console.log(decode,token, accountType)
      if (decode.is_Ap && accountType == 'seller') {
        this.apiService.authState.next(true)
        this.apiService.approvedsellerOrAuthicated.next(true)
        this.router.navigate(['/seller/home']);
        console.log(decode, accountType)
      } else if (decode.is_Ap == false && accountType == 'seller'){
        this.apiService.authState.next(true)
        this.apiService.approvedsellerOrAuthicated.next(true)
        console.log(decode, accountType)
        this.router.navigate(['/seller/registration']);
      } else if (decode.is_Ap == false && accountType == 'user') {
        this.apiService.authState.next(true)
        this.apiService.approvedsellerOrAuthicated.next(true)
        console.log(decode, accountType)
        this.router.navigate(['/user/home']);
      }
    }else{
      this.router.navigate(['/user/home']);
    }
    
    
  }
}
