import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MenubarModule} from "primeng/menubar";
import {PagesModule} from "../pages/pages.module";
import {ButtonModule} from "primeng/button";
import {ChipModule} from "primeng/chip";
import {NavbarComponent} from "./navbar/navbar.component";
import {UserPlateComponent} from "./user-plate/user-plate.component";
import {TagModule} from "primeng/tag";

@NgModule({
  imports: [
    CommonModule,
    MenubarModule,
    PagesModule,
    ButtonModule,
    ChipModule,
    TagModule
  ],
  declarations: [
    NavbarComponent, UserPlateComponent
  ],
  exports: [
    NavbarComponent, UserPlateComponent
  ]
})
export class ComponentsModule {
}
