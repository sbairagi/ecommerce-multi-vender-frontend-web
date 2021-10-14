import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupModalComponent } from './components/modals/signup-modal/signup-modal.component';
import { UserloginModalComponent } from './components/modals/userlogin-modal/userlogin-modal.component';
import { SellerloginModalComponent } from './components/modals/sellerlogin-modal/sellerlogin-modal.component';
import { ForgotpasswordModalComponent } from './components/modals/forgotpassword-modal/forgotpassword-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { SellersComponent } from './sellers/sellers.component';
import { SellerhomeComponent } from './sellerpages/sellerhome/sellerhome.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesdropdownComponent } from './home/categoriesdropdown/categoriesdropdown.component';
import { TopsliderComponent } from './home/topslider/topslider.component';
import { DealofthedaysliderComponent } from './home/dealofthedayslider/dealofthedayslider.component';
import { TrandingproductsliderComponent } from './home/trandingproductslider/trandingproductslider.component';
import { AllcategoryslidersComponent } from './home/allcategorysliders/allcategorysliders.component';
import { ProductdetailpageComponent } from './home/productdetailpage/productdetailpage.component';
import { RegistrationpageComponent } from './sellerpages/registrationpage/registrationpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupModalComponent,
    UserloginModalComponent,
    SellerloginModalComponent,
    ForgotpasswordModalComponent,
    FooterComponent,
    UsersComponent,
    SellersComponent,
    SellerhomeComponent,
    HomeComponent,
    CategoriesdropdownComponent,
    TopsliderComponent,
    DealofthedaysliderComponent,
    TrandingproductsliderComponent,
    AllcategoryslidersComponent,
    ProductdetailpageComponent,
    RegistrationpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
