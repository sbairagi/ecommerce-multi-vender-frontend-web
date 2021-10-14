import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesdropdownComponent } from './categoriesdropdown/categoriesdropdown.component';
import { TopsliderComponent } from './topslider/topslider.component';
import { TrandingproductsliderComponent } from './trandingproductslider/trandingproductslider.component';
import { DealofthedaysliderComponent } from './dealofthedayslider/dealofthedayslider.component';
import { AllcategoryslidersComponent } from './allcategorysliders/allcategorysliders.component';
import { ProductdetailpageComponent } from './productdetailpage/productdetailpage.component';


@NgModule({
  declarations: [
    CategoriesdropdownComponent,
    TopsliderComponent,
    TrandingproductsliderComponent,
    DealofthedaysliderComponent,
    AllcategoryslidersComponent,
    ProductdetailpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
