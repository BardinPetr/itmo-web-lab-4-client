import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        ButtonModule
    ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
