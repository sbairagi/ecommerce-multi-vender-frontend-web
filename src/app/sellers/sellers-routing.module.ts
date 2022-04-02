import { Routes } from '@angular/router';
import { AddproductsComponent } from '../sellerpages/addproducts/addproducts.component';
import { AllproductsComponent } from '../sellerpages/allproducts/allproducts.component';
import { RegistrationpageComponent } from '../sellerpages/registrationpage/registrationpage.component';
import { SellerhomeComponent } from '../sellerpages/sellerhome/sellerhome.component';
import { SellerAuthGuardService } from '../services/seller-auth-guard.service';


export const SellerRoutes: Routes = [
    { path: 'home',       component: SellerhomeComponent, canActivate: [SellerAuthGuardService] },
    { path: 'allproducts',       component: AllproductsComponent, canActivate: [SellerAuthGuardService] },
    { path: 'addproducts',       component: AddproductsComponent, canActivate: [SellerAuthGuardService] },
    { path: 'registration',       component: RegistrationpageComponent }
];

