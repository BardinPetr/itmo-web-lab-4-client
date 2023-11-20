import {Injectable} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: OidcSecurityService) {
  }

  public get authenticated() {
    return this.authService.isAuthenticated()
  }

  public get username() {
    return this
      .authService
      .getUserData()
      .pipe(map(x => x?.["preferred_username"]))
  }

  public logout() {
    this.authService
      .logoff()
      .subscribe()
  }

  public login() {
    this.authService
      .authorize()
  }
}
