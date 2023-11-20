import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {PointPageComponent} from "../pages/point-page/point-page.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {PagesModule} from "../pages/pages.module";
import {ButtonModule} from "primeng/button";
import {UserPlateComponent} from "./user-plate/user-plate.component";
import {ChipModule} from "primeng/chip";
import {isAuthenticated} from "../auth/auth-guard.service";

const routes: Routes = [
  {
    path: 'points',
    title: 'Points',
    component: PointPageComponent,
    canActivate: [isAuthenticated]
  },
  {
    path: '',
    title: "LAB4",
    component: HomePageComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    MenubarModule,
    PagesModule,
    ButtonModule,
    ChipModule
  ],
  declarations: [
    NavbarComponent, UserPlateComponent
  ],
  exports: [
    RouterModule, NavbarComponent, UserPlateComponent
  ]
})
export class AppRoutingModule {
}
