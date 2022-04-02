import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SellerRoutes } from './sellers-routing.module';
import { RegistrationpageComponent } from '../sellerpages/registrationpage/registrationpage.component';
import { SellerhomeComponent } from '../sellerpages/sellerhome/sellerhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesdropdownComponent } from '../sellerpages/sellerhome/categoriesdropdown/categoriesdropdown.component';
import { DealofthedaysliderComponent } from '../sellerpages/sellerhome/dealofthedayslider/dealofthedayslider.component';
import { ProductdetailpageComponent } from '../sellerpages/sellerhome/productdetailpage/productdetailpage.component';
import { AllcategoryslidersComponent } from '../sellerpages/sellerhome/allcategorysliders/allcategorysliders.component';
import { TopsliderComponent } from '../sellerpages/sellerhome/topslider/topslider.component';
import { TrandingproductsliderComponent } from '../sellerpages/sellerhome/trandingproductslider/trandingproductslider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddproductsComponent } from '../sellerpages/addproducts/addproducts.component';
import { AllproductsComponent } from '../sellerpages/allproducts/allproducts.component';



@NgModule({
  declarations: [
    RegistrationpageComponent,
    SellerhomeComponent,
    CategoriesdropdownComponent,
    DealofthedaysliderComponent,
    ProductdetailpageComponent,
    AllcategoryslidersComponent,
    TopsliderComponent,
    TrandingproductsliderComponent,
    AddproductsComponent,
    AllproductsComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule.forChild(SellerRoutes),
  ]
})
export class SellersModule {
 }
