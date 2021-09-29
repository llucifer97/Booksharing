import { SigninService } from 'src/app/services/signin.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _signInService : SigninService, private router : Router){}

  canActivate() : boolean
  {
    if(this._signInService.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false;
    }

  }



}
