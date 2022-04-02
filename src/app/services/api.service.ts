import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

interface categoriesproducts {
  count: number
  next: string
  previous: string
  results: []
}

interface SellerDetail{
  photo: File,
  adharcard: File,
  pancard: File,
  gumasta: File,
  gst_Number: String,
  shop_Name: String,
  whatsapp_no: Number,
  shop_Address: String,
  pincode: Number,
  landmark: String,
  locality: String,
  city: String,
  state: String,
}

interface productsdetail {
  product_name: string
  category: string
  root_categor: string
  subcategory: string
  price: number
  price_not: number
  desc:string
  quantity: number
  image1:string
  image2:string
  image3:string
  image4:string
  productsize: []
  product_review: []
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  category: string = '';
  root_category: string = '';
  subcategory: string = '';


  authState = new BehaviorSubject(false);
  approvedsellerOrAuthicated = new BehaviorSubject(false);
  productdetailurl:string = ''
  baseUrl = 'http://127.0.0.1:8000/api/';
  authUrl = 'http://127.0.0.1:8000/auth/';
  fcmDeviceUrl = 'http://127.0.0.1:8000/devices/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}
  getAuthHeaders() {
    const token = this.cookieService.get('authToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    });
  }

  fileuploadAuthHeaders() {
    const token = this.cookieService.get('authToken');
    return new HttpHeaders({
      Authorization: `JWT ${token}`
    });
  }

  loginUser(email: string, password: string) {
    const body = JSON.stringify({ email, password });
    return this.httpClient.post<any>(
      this.authUrl + 'login/',
      body,
      { headers: this.headers }
    );
  }
  registerUser(
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    phone_number: string
  ) {
    const body = JSON.stringify({
      email,
      password,
      first_name,
      last_name,
      phone_number,
    });
    return this.httpClient.post<any>(
      'http://127.0.0.1:8000/api/users/',
      body,
      { headers: this.headers }
    );
  }

  
  

  allcategory(){
    return this.httpClient.get<any>(
      'http://127.0.0.1:8000/sellerapi/category/',
      { headers: this.headers }
    );
  }

  getProducts(url:string){
    return this.httpClient.get<categoriesproducts>(
      url,
      { headers: this.headers }
    );
  }

  getproductdetails(){
    return this.httpClient.get<productsdetail>(
      this.productdetailurl,
      { headers: this.headers }
    );
  }

  
      

  sellerDetail(
    formData: FormData
    // photo: File,
    // adharcard: File,
    // pancard: File,
    // gumasta: File,
    // gst_Number: String,
    // shop_Name: String,
    // whatsapp_no: Number,
    // shop_Address: String,
    // pincode: Number,
    // landmark: String,
    // locality: String,
    // city: String,
    // state: String,
  ) {
    // const body = JSON.stringify({
    //   photo,
    //   adharcard,
    //   pancard,
    //   gumasta,
    //   gst_Number,
    //   shop_Name,
    //   whatsapp_no,
    //   shop_Address,
    //   pincode,
    //   landmark,
    //   locality,
    //   city,
    //   state
    // });

    // const token = this.cookieService.get('authToken')
    // console.log(body)
    const token = this.cookieService.get('authToken');
  
    return this.httpClient.post<SellerDetail>(
      'http://127.0.0.1:8000/api/sellerprofile/',
      formData,{ headers : { Authorization: `JWT ${token}`}}
    );
  }

  
  // Firebase Device Service
  // createFCMDevice(payload) {
  //   const body = JSON.stringify(payload);
  //   return this.httpClient.post(this.fcmDeviceUrl, body, {
  //     headers: this.getAuthHeaders()
  //   });
  // }

  // getFCMDevice() {
  //   return this.httpClient.get(this.baseUrl + 'list/devices/', {
  //     headers: this.getAuthHeaders()
  //   });
  // }


  logout() {
    this.authState.next(false);
    this.approvedsellerOrAuthicated.next(false);
    // this.cookieService.deleteAll()
    localStorage.clear();
  }
  
  // Returns whether the user is currently authenticated
  // Could check if current token is still valid
  isAuthenticated() {
    // const token = this.cookieService.get('authToken');
    const token = localStorage.getItem('authToken');
    if (token) {
      this.authState.next(true);
      return this.authState.value;
    } else {
      return this.authState.value;
    }
  }

  isAuthenticatedOrApprovedSeller() {
    // const token = this.cookieService.get('authToken');
    const token = localStorage.getItem('authToken');
    if (token){
      let userdetail = this.parseJwt(token)
      if (userdetail.is_Ap) {
        this.approvedsellerOrAuthicated.next(true)
        return this.approvedsellerOrAuthicated.value;
      } else {
        return this.approvedsellerOrAuthicated.value;
      }
    }else{
      return this.approvedsellerOrAuthicated.value;
    }
    
  }

  parseJwt(token: string) {
    try {
      // Get Token Header
      const base64HeaderUrl = token.split('.')[0];
      const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
      const headerData = JSON.parse(window.atob(base64Header));
  
      // Get Token payload and date's
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const dataJWT = JSON.parse(window.atob(base64));
      dataJWT.header = headerData;
  
  // TODO: add expiration at check ...
  
  
      return dataJWT;
    } catch (err) {
      return false;
    }
  }

}
