import {Component} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-point-page',
  templateUrl: './point-page.component.html',
  styleUrls: ['./point-page.component.sass']
})
export class PointPageComponent {

  constructor(public auth: AuthService) {
  }

}
