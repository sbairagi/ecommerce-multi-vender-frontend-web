import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiService } from './api.service';
// import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public apiService: ApiService) { }

  canActivate(): boolean {
    return this.apiService.isAuthenticated();
  }

}
