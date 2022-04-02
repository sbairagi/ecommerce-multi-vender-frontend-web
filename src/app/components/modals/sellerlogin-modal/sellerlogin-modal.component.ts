import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

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
  selector: 'app-sellerlogin-modal',
  templateUrl: './sellerlogin-modal.component.html',
  styleUrls: ['./sellerlogin-modal.component.css']
})
export class SellerloginModalComponent implements OnInit {

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
    this.loginUser();
  }

  loginUser() {
    let authObs: Observable<AuthResponseData>;
    this.loadingSpinner = true
    authObs = this.apiService.loginUser(this.authLoginForm.value.email, this.authLoginForm.value.password);
    authObs.subscribe((result: TokenObj) => {
      // this.cookieService.set('authToken', result.token);
      localStorage.setItem('authToken', result.token);
      // const decoded = jwt_decode(result.token);
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
      if (!decoded.is_Ap) {
        let a = <HTMLButtonElement>document.getElementById('closesellerModal');
        a.click();
        localStorage.setItem('accounttype', 'seller');
        this.router.navigate(['/seller/registration']);
        // this.serverError = 'redirect to seller Registration form';
        // console.log('redirect to seller Registration form')
      } else {
        let a = <HTMLButtonElement>document.getElementById('closesellerModal');
        a.click();
        // this.apiService.redirectTo.next('/seller/home')
        localStorage.setItem('accounttype', 'seller');
        this.router.navigate(['/seller/home']);
      }
    },
    errorRes => {
      if (errorRes.error.email) {
        const code = errorRes.error.email;
        this.loadingSpinner = false
        this.serverError = code
        // this.errorMessage = code;
      } else if (errorRes.error.non_field_errors) {
        const code = errorRes.error.non_field_errors;
        this.loadingSpinner = false
        this.serverError = 'Username or password is incorret. Please try again.';
      } else {
        this.loadingSpinner = false
        this.serverError = 'Server Error! \
        Please try again later and if \
        the problem persists please email the admins \
        at shopping-web@gmail.com or call us at +91 7049738070';
      }

      // const modalRef = this.modalService.open(AlertModalComponent, { centered: true });
      // modalRef.componentInstance.response_msg = this.errorMessage;
      // modalRef.componentInstance.btn_txt = 'Try Again';
    });
  }

}
