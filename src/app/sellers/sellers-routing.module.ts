import { Routes } from '@angular/router';
import { RegistrationpageComponent } from '../sellerpages/registrationpage/registrationpage.component';
import { SellerhomeComponent } from '../sellerpages/sellerhome/sellerhome.component';


export const SellerRoutes: Routes = [
    { path: '',       component: SellerhomeComponent },
    // { path: 'registration',       component: RegistrationpageComponent }
];

