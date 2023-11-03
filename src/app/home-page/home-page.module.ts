import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        HomePageComponent
    ]
})
export class HomePageModule {
}
