import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './users-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { FilterproductspageComponent } from '../userpages/filterproductspage/filterproductspage.component';



@NgModule({
  declarations: [
    FilterproductspageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes),
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
  ]
})
export class UsersModule { }
