import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardService implements CanActivate {

  constructor(public apiService: ApiService) { }
  canActivate(): boolean {
    return this.apiService.isAuthenticatedOrApprovedSeller();
  }
}

