import {Component} from '@angular/core';
import {OidcSecurityService} from "angular-auth-oidc-client";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-user-plate',
  templateUrl: './user-plate.component.html'
})
export class UserPlateComponent {
  constructor(public authService: AuthService) {
  }
}
