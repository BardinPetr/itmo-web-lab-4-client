import {Component} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {
  constructor(public oidcService: OidcSecurityService) {
  }

  doLogin() {
    this.oidcService.authorize()
  }

  doLogout() {
    this.oidcService.logoff()
      .subscribe(console.warn)
  }
}
