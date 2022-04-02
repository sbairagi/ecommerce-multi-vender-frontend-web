import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailpageComponent } from './home/productdetailpage/productdetailpage.component';
import { RegistrationpageComponent } from './sellerpages/registrationpage/registrationpage.component';
import { SellersComponent } from './sellers/sellers.component';
import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';
import { UsersComponent } from './users/users.component';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full',
  },
    
  {
    path: 'user',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersComponent,
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
export class AppRoutingModule { 
  constructor(private apiservice: ApiService){
    // this.apiservice.redirectTo.subscribe(data => {
    //   console.log(data)
      
    // })
  }
}
