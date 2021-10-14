import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailpageComponent } from './home/productdetailpage/productdetailpage.component';
import { RegistrationpageComponent } from './sellerpages/registrationpage/registrationpage.component';
import { SellersComponent } from './sellers/sellers.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
      // loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
    },{
      path: 'productdetail',
      component: ProductdetailpageComponent,
      // loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
    },{
      path: 'registration',
      component: RegistrationpageComponent,
      // loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
    },
    
  {
    path: 'user',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
        canActivate: [AuthGuardService],
        loadChildren: () => import('./users/users.module').then( m => m.UsersModule)
        // loadChildren: './users/users.module#UsersModule'
      }
    ]
  }, 
  {
    path: 'seller',
    component: SellersComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersModule)
        // loadChildren: './sellers/sellers.module#SellersModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
