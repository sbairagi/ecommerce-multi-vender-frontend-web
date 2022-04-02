import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProductdetailpageComponent } from '../home/productdetailpage/productdetailpage.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { FilterproductspageComponent } from '../userpages/filterproductspage/filterproductspage.component';

// import { LoginComponent } from '../../pages/login/login.component';
// import { RegisterComponent } from '../../pages/register/register.component';

export const UserRoutes: Routes = [
    { path: 'home',          component: HomeComponent },
    { path: 'productdetail',       component: ProductdetailpageComponent},
    { path: 'filterproducts',       component: FilterproductspageComponent},
];

