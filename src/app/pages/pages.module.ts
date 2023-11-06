import {NgModule} from "@angular/core";
import {PointPageModule} from "./point-page/point-page.module";
import {HomePageModule} from "./home-page/home-page.module";
import {LoginPageModule} from "./login-page/login-page.module";

@NgModule({
  declarations: [],
  imports: [
    PointPageModule,
    HomePageModule,
    LoginPageModule
  ]
})
export class PagesModule {
}
