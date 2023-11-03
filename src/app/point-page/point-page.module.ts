import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PointFormComponent} from './point-form/point-form.component';
import {PointTableComponent} from './point-table/point-table.component';
import {PointCanvasComponent} from './point-canvas/point-canvas.component';
import {PointPageComponent} from './point-page.component';
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        PointFormComponent,
        PointTableComponent,
        PointCanvasComponent,
        PointPageComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PointPageComponent
    ]
})
export class PointPageModule {
}
