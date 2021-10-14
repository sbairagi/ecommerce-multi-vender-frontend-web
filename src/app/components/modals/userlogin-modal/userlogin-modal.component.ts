import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

// const jwt_decode = require('jwt-decode');

interface TokenObj {
  token: string;
  first_name: string;
  last_name: string;
}

interface AuthResponseData {
  token: string;
  first_name: string;
  last_name: string;
  email: string;
}


@Component({
  selector: 'app-userlogin-modal',
  templateUrl: './userlogin-modal.component.html',
  styleUrls: ['./userlogin-modal.component.css']
})
export class UserloginModalComponent implements OnInit {


  authLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required, )
  });

  loadingSpinner: boolean = false;
  serverError: string = ''

  constructor(
    private apiService:ApiService,
    private cookieService: CookieService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  saveLoginForm() {
    console.log('values : ',this.authLoginForm.value)
    this.loginUser();
  }

  
  loginUser() {
    let authObs: Observable<AuthResponseData>;
    this.loadingSpinner = true
    authObs = this.apiService.loginUser(this.authLoginForm.value.email, this.authLoginForm.value.password);
    authObs.subscribe((result: TokenObj) => {
      this.cookieService.set('authToken', result.token);
      const decoded = this.apiService.parseJwt(result.token)
      const userDetails = {
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        user_id: decoded.user_id,
        is_seller: decoded.is_seller,
        is_Ap: decoded.is_Ap
      };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      this.loadingSpinner = false
      let a = <HTMLButtonElement>document.getElementById('usercloseModal');
      let b = <HTMLButtonElement>document.getElementById('menu-button');
      b.click();
      a.click();
      console.log('close')
      if (!decoded.is_seller) {
        this.router.navigate(['/home']);
        console.log('is_seller is false')
      } else {
        this.router.navigate(['/seller']);
      }
    },
    errorRes => {
      if (errorRes.error.email) {
        const code = errorRes.error.email;
        this.loadingSpinner = false
        this.serverError = code
      } else if (errorRes.error.non_field_errors) {
        const code = errorRes.error.non_field_errors;
        this.loadingSpinner = false
        this.serverError = 'Username or password is incorret. Please try again.';
      } else {
        this.loadingSpinner = false
        this.serverError = 'Server Error! \
        Please try again later and if \
        the problem persists please email the admins \
        at shopingweb@gmail.com or call us at +91 7049738070';
      }
    });
  }

}
