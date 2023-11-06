import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {PointPageComponent} from "../pages/point-page/point-page.component";
import {HomePageModule} from "../pages/home-page/home-page.module";
import {PointPageModule} from "../pages/point-page/point-page.module";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {LoginPageComponent} from "../pages/login-page/login-page.component";
import {PagesModule} from "../pages/pages.module";

const routes: Routes = [
  {
    path: 'points',
    title: 'Points',
    component: PointPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
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
    CommonModule,
    MenubarModule,
    PagesModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    RouterModule, NavbarComponent
  ]
})
export class AppRoutingModule {
}
