import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";
import {PointPageComponent} from "../point-page/point-page.component";
import {HomePageModule} from "../home-page/home-page.module";
import {PointPageModule} from "../point-page/point-page.module";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule, NgForOf} from "@angular/common";
import {MenubarModule} from "primeng/menubar";

const routes: Routes = [
    {
        path: 'points',
        title: 'Points',
        component: PointPageComponent
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
        HomePageModule,
        PointPageModule,
        RouterModule.forRoot(routes),
        MenubarModule,
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
