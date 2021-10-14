import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  loadingSpinner: boolean = false;
  serverError: string = ''

  
  
  authRegForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone_number: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  saveRegForm() {
    let authObs: Observable<any>;
    this.loadingSpinner = true
    authObs = this.apiService.registerUser(
      this.authRegForm.value.email,
      this.authRegForm.value.password,
      this.authRegForm.value.first_name,
      this.authRegForm.value.last_name,
      this.authRegForm.value.phone_number,
      );
    authObs.subscribe(regResponse => {
      this.apiService.loginUser(
        this.authRegForm.value.email,
        this.authRegForm.value.password).subscribe(loginResponse => {
          this.cookieService.set('authToken', loginResponse.token);
          const decoded = this.apiService.parseJwt(loginResponse.token);
          const userDetails = {
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            user_id: decoded.user_id,
            is_seller: decoded.is_seller,
            is_Ap: decoded.is_Ap
          };
          localStorage.setItem('userDetails', JSON.stringify(userDetails));
          this.loadingSpinner = false
          let a = <HTMLButtonElement>document.getElementById('closebutton');
          let b = <HTMLButtonElement>document.getElementById('menu-button');
          b.click();
          a.click();
          if (decoded.is_seller) {
            this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
          } else {
            this.router.navigate(['/home'], { queryParamsHandling: 'preserve' });
          }
        }, errorRes => {
          this.logRegErrors(errorRes);
          
        });
    },
    errorRes => {
      this.logRegErrors(errorRes);
    });
}

logRegErrors(errorRes: any) {
    if (errorRes.error.email) {
      const code = errorRes.error.email;
      this.loadingSpinner = false;
      this.serverError = code;
    } else if (errorRes.error.non_field_errors) {
      const code = errorRes.error.non_field_errors;
      this.loadingSpinner = false;
      this.serverError = 'Username or password is incorret. Please try again.';
    } else {
      this.loadingSpinner = false;
      this.serverError =  'Server Error! \
      Please try again later and if \
      the problem persists please email the admins \
      at shoping-web@gmail.com or call us at +91 7049738070';
    }
    // const modalRef = this.modalService.open(AlertModalComponent, { centered: true });
    // modalRef.componentInstance.response_msg = this.errorMessage;
    // modalRef.componentInstance.btn_txt = 'Try Again';
  }
}